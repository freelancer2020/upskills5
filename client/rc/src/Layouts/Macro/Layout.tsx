import React from "react";
import Header from "../../components/header/Header";
//section components
import TravelInsurance from "../../components/sections/travel-insurance/TravelInsurance";
import InternationalVisitor from "../../components/sections/international-visitor/InternationalVisitor";
//blocks
import Image from "../../components/blocks/Image";
import Content from "../../components/blocks/Content";
// assets
import visitor from "../../assets/international-visitor.jpg";
import styles from "./layout.module.css";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <header className={styles["header"]}>
        <Header />
      </header>
      <main>
        <section className={styles["travel-insurance"]}>
          <TravelInsurance />
        </section>
        <section
          aria-labelledby="Travel-Insurance"
          className={styles["international-visitor"]}
        ></section>
        <section className={styles["travel-topics"]}>
          <InternationalVisitor
            reverse={false}
            image={<Image src={visitor} alt="graphic visitor image" />}
            content={
              <Content
                header="Insurance for International Visitor"
                children={
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                }
              />
            }
          />
        </section>
        <article className={styles["posts"]}></article>
        <section className={styles["contact"]}></section>
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
