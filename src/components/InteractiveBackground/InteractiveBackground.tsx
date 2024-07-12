"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from "./InteractiveBackground.module.scss";
import { throttle } from 'lodash';

const SQUARE_SIZE = 50;
const EFFECT_RADIUS = 200;
const MIN_OPACITY = 0.1;

const InteractiveBackground = () => {
  const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });
  const [opacities, setOpacities] = useState<number[]>([]);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (gridContainerRef.current) {
        const parent = gridContainerRef.current.parentElement;
        if (parent) {
          const columns = Math.ceil(parent.clientWidth / SQUARE_SIZE);
          const rows = Math.ceil(parent.clientHeight / SQUARE_SIZE);
          setGridSize((prevSize) => {
            if (prevSize.columns !== columns || prevSize.rows !== rows) {
              return { columns, rows };
            }
            return prevSize;
          });
        }
      }
    };

    const handleMouseMove = throttle((e) => {
      if (gridContainerRef.current) {
        const gridOpacities = [...opacities];
        const gridItems = gridContainerRef.current.children;
        for (let i = 0; i < gridItems.length; i++) {
          const item = gridItems[i] as HTMLElement;
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + SQUARE_SIZE / 2;
          const itemCenterY = rect.top + SQUARE_SIZE / 2;
          const distance = Math.sqrt(
            (itemCenterX - e.clientX) ** 2 + (itemCenterY - e.clientY) ** 2
          );

          let opacity = MIN_OPACITY;
          if (distance < EFFECT_RADIUS) {
            opacity = 1 - (distance / EFFECT_RADIUS) * (1 - MIN_OPACITY);
          }

          if (gridOpacities[i] !== opacity) {
            gridOpacities[i] = opacity;
          }
        }

        setOpacities(gridOpacities);
      }
    }, 50);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const initialOpacities = new Array(gridSize.columns * gridSize.rows).fill(MIN_OPACITY);
    setOpacities(initialOpacities);
  }, [gridSize]);

  return (
    <div className={styles.container}>
      <div
        ref={gridContainerRef}
        className={styles.gridContainer}
        style={{
          "--squareSize": `${SQUARE_SIZE}px`,
          "--columns": gridSize.columns,
          "--rows": gridSize.rows
        } as React.CSSProperties}
      >
        {opacities.map((opacity, index) => (
          <div
            key={`dot-${index}`}
            className={styles.dotWrapper}
            style={{ opacity }}
          >
            <div className={styles.dot} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveBackground;
