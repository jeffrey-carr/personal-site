import React, { ReactNode } from "react";
import styles from "./InfoSection.module.scss";
import Image from "next/image";

const ImageSection = ({ url, alt }: { url: string; alt?: string }) => {
  return (
    <div className={styles.sectionImage}>
      <Image src={url} alt={alt ?? "Section image"} fill={true} />
    </div>
  );
}

type ImageSide = "left" | "right";
export const InfoSection = ({
  image,
  title,
  color,
  imageSide = "right",
  children
}: {
  image: string;
  title: string;
  color: string;
  imageSide?: ImageSide;
  children?: ReactNode;
}) => {
  return (
    <div className={styles.container} style={{ "--color": color } as React.CSSProperties}>
      <div className={styles.sectionHeaderBanner}>
        <h1 className={styles.sectionHeader}>{title}</h1>
      </div>
      {imageSide === "left" && <ImageSection url={image} alt={`Image of ${title}`} />}
      <div className={styles.sectionContent}>{children}</div>
      {imageSide === "right" && <ImageSection url={image} alt={`Image of ${title}`} />}
    </div>
  );
};
