import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preiview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  //Editor, Preview를 상태관리, 수정하는 함수들이 여기 들어와야 함.
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Olaf",
      company: "google",
      theme: "light",
      title: "Software Engineer",
      email: "pgy9394@gmail.com",
      message: "go for it",
      fileName: "olaf",
      fileURL: null,
    },
    {
      id: "2",
      name: "Dobi",
      company: "google",
      theme: "dark",
      title: "junior Engineer",
      email: "pgy9394@gmail.com",
      message: "go for it",
      fileName: "dobi",
      fileURL: null,
    },
    {
      id: "3",
      name: "Pikachu",
      company: "google",
      theme: "colorful",
      title: "senior Engineer",
      email: "pgy9394@gmail.com",
      message: "go for it",
      fileName: "pikachu",
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card)=>{
    const updates = [...cards,card];
    setCards(updates);
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
