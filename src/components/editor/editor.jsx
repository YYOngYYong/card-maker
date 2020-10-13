import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditor from "../card_editor/card_editor";
import styles from "./editor.module.css";

const Editor = ({FileInput, cards,addCard,updateCard,deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {Object.keys(cards).map((key) => (
      <CardEditor key={key} FileInput={FileInput} id={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard}/>
  </section>
);

export default Editor;
