"use client";

import React from "react";
import Image from "next/image";
import { AnchorButton } from "@/components/Button/AnchorButton";

import styles from "./page.module.scss";
import cx from "classnames";
import { InfoSection } from "@/components/InfoSection/InfoSection";
import InteractiveBackground from "@/components/InteractiveBackground/InteractiveBackground";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <InteractiveBackground />
      </div>
      <section className={cx(styles.section, styles.mainPage)}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>
            Jeffrey Carr
          </h1>
        </div>
        <div className={cx(styles.profilePictureContainer, styles.fadeInAndUp)}>
          <Image
            className={styles.profileImage}
            src={"/images/beachPicture.jpg"}
            alt={"An image of Jeff"}
            layout="responsive"
            height={100}
            width={100}
          />
        </div>
        <div className={styles.profileButtons}>
          <AnchorButton
            className={styles.fadeInAndUp}
            href={"https://github.com/jcarr98"}
            newTab={true}
          >
            Github Profile
          </AnchorButton>
          <AnchorButton
            className={styles.fadeInAndUp}
            href={"https://www.linkedin.com/in/jeffrey-carr"}
            newTab={true}
          >
            LinkedIn Profile
          </AnchorButton>
        </div>
        <div className={styles.downArrow}>
          <Image
            src={"/icons/arrow-down.svg"}
            alt={"A down arrow"}
            height={10}
            width={10}
          />
        </div>
      </section>
      <section className={styles.section}>
        <InfoSection
          image={"/images/mountainPicture.jpg"}
          title={"About Me"}
          color={"#eb4034"}
          imageSide="right"
        >
          <p>
            I&apos;ve been interested in computers since middle school when I started playing video games and thought it was amazing what{" "}
            you could do with a computer. Freshman year of high school, I started a programming club as a place where students could{" "}
            collaborate and learn about programming. In college, I started a video game development club to help other students help{" "}
            each other learn the in&apos;s and out&apos;s of video game development. The club grew up to over 50 members.
          </p>
          <br />
          <p>
            In my free time, I like to play around with programming projects trying to learn new skills. I also enjoy playing sports{" "}
            with my friends. If I&apos;m feeling especially active that day, I might enjoy going outside on a hike. A couple summers ago I{" "}
            spent a lot of time with my mom driving from Massachusetts to California and back. She even made a{" "}
            short <a href="https://jeffjeanusa.blogspot.com/" target="_blank" rel="noreferrer">blog</a> about it!
          </p>
        </InfoSection>
      </section>
      <section className={styles.section}>
        <InfoSection
          image={"/images/code.png"}
          title={"My Programming Projects"}
          color={"orange"}
          imageSide={"left"}
        >
          <p>There are a few web projects that I&apos;ve created in my free time to work on my web development skills</p>
          <br />
          <ol>
            <li>
              <a href="/">This site!</a> This site was created as a landing page to introduce myself to anyone who wants{" "}
              to get to know me. This site was written from scratch using NextJS and React. The SASS is all custom.
            </li>
            <li>
              <a href="https://recipe.jeffreycarr.dev" target="_blank" rel="noreferrer">Recipe Book</a>. I created the {" "}
              recipe book as a small way to honor my late mother. She saved a binder of recipes that my family loved.{" "}
              The web app is a full stack web application written in pure HTML, JavaScript, and CSS. The app allows for{" "}
              saving favorite recipes, creating new recipes, and editing existing recipes.
            </li>
            <li>
              <a href="https://games.jeffreycarr.dev" target="_blank" rel="noreferrer">Web Games</a>. These are some {" "}
              simple web games that I created to practice my code and show some games to my friends. This site was{" "}
              is a NextJS app with custom SASS.
            </li>
          </ol>
        </InfoSection>
      </section>
    </main>
  );
}
