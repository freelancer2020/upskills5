import React from "react";
import Header from "../../components/header/Header";
//section components
import TravelInsurance from "../../components/sections/travel-insurance/TravelInsurance";
import styles from "./layout.module.css";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <header className={styles["header"]}>
        <Header />
      </header>
      <section className={styles["travel-insurance"]}>
        <TravelInsurance />
      </section>
      <section
        aria-labelledby="Travel-Insurance"
        className={styles["international-visitor"]}
      ></section>
      <section className={styles["travel-topics"]}></section>
      <article className={styles["posts"]}></article>
      <section className={styles["contact"]}></section>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
