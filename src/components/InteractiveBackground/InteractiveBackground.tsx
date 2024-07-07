"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from "./InteractiveBackground.module.scss";
import { throttle } from 'lodash';

const DOT_SIZE = 50;  // Use the correct size based on your SCSS variable
const EFFECT_RADIUS = 200;
const MIN_OPACITY = 0.1;

const InteractiveBackground = () => {
  const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });
  const [opacities, setOpacities] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const columns = Math.ceil(window.innerWidth / DOT_SIZE);
      const rows = Math.ceil(window.innerHeight / DOT_SIZE);
      setGridSize({ columns, rows });
    };

    const handleMouseMove = throttle((e) => {
      if (containerRef.current) {
        const gridOpacities = [...opacities];
        const gridItems = containerRef.current.children;
        for (let i = 0; i < gridItems.length; i++) {
          const item = gridItems[i] as HTMLElement;
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + DOT_SIZE / 2;
          const itemCenterY = rect.top + DOT_SIZE / 2;
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

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
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
    <div
      ref={containerRef}
      className={styles.gridContainer}
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
  );
};

export default InteractiveBackground;
