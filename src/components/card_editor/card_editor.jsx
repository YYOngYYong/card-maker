import React from "react";
import ImageInput from "../../image_file_input/image_file_input";
import Button from "../button/button";
import styles from "./card_editor.module.css";


const Card_editor = ({ card }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;

  const onSubmit = (event)=>{
   
  };
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name}/>
      <input className={styles.input} type="text" name="company" value={company}/>
      <select className={styles.select} type="text" name="name" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title}/>
      <input className={styles.input} type="text" name="email" value={email}/>
      <textarea className={styles.textarea} name="message" value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageInput/>
      </div>
      <Button name="Delete" onClick={onSubmit}/>
    </form>
  );
};

export default Card_editor;
