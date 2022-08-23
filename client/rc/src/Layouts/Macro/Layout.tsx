import React from "react";
import Header from "../../components/header/Header";
import styles from "./layout.module.css";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <header className={styles["header"]}>
        <Header />
      </header>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;

