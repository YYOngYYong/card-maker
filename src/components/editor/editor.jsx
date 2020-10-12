import React from "react";
import Card_editor from "../card_editor/card_editor";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map((card) => (
      <Card_editor card={card} />
    ))}
  </section>
);

export default Editor;
