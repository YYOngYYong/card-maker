import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preiview/preview";
import styles from "./maker.module.css";

const Maker = ({FileInput, authService }) => {
  //Editor, Preview를 상태관리, 수정하는 함수들이 여기 들어와야 함.
  const [cards, setCards] = useState({
    '1':{
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
    '2':{
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
    '3':{
      id: "3",
      name: "Pikachu",
      company: "google",
      theme: "colorful",
      title: "senior Engineer",
      email: "pgy9394@gmail.com",
      message: "go for it",
      fileName: "pikachu",
      fileURL: null,
    }
  });
 

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


  const createOrUpdate = (card)=> {
    //setCards 할때의 cards의 상태를 불러와서
    setCards(cards =>{
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }
  const deleteCard = (card)=>{
    setCards(cards =>{
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdate} updateCard={createOrUpdate} deleteCard={deleteCard}/>
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
