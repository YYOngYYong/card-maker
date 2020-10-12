import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Preview</h1>
    <ul>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  </section>
);

export default Preview;