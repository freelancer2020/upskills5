import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
//section components
import TravelInsurance from "../../components/sections/travel-insurance/TravelInsurance";
import InternationalVisitor from "../../components/sections/international-visitor/InternationalVisitor";
import TravelTopics from "../../components/sections/travel-topics/TravelTopics";
//blocks
import Image from "../../components/blocks/Image";
import Content from "../../components/blocks/Content";
import Topic from "../../components/blocks/Topic";
// assets
import visitor from "../../assets/international-visitor.jpg";
import travelTopics from "../../assets/travel-topics.jpg";
import styles from "./layout.module.css";
import renting from "../../assets/renting.jpg";
import trends from "../../assets/trends.jpg";
import popular from "../../assets/popular.jpg";
import gear from "../../assets/gear.jpg";

const arr = [
  {
    src: renting,
    altr: "Renting Vacation Homes",
    caption: "Renting  Homes",
  },
  {
    src: trends,
    altr: "Trends and Predictions",
    caption: "Trends & Predictions",
  },
  {
    src: popular,
    altr: "Popular Travel Destinations for 2021",
    caption: "Popular Travel",
  },
  {
    src: gear,
    altr: "Travel Gear for Safe Travels in 2021",
    caption: "Travel Gear ",
  },
];
const Layout: React.FC = () => {
  const [reverse, setReverse] = useState<boolean>(false);
  useEffect(() => {
    const availWidth = window.screen.availWidth;
    availWidth <= 500 ? setReverse(true) : setReverse(false);
  }, []);
  return (
    <React.Fragment>
      <header className={styles["header"]}>
        <Header />
      </header>
      <main>
        <section
          aria-labelledby="Travel-Insurance"
          className={styles["travel-insurance"]}
        >
          <TravelInsurance />
        </section>

        <section className={styles["travel-topics"]}>
          <InternationalVisitor
            reverse={reverse}
            image={<Image src={visitor} alt="" />}
            content={
              <Content
                header="Insurance for International Visitor"
                children={
                  <React.Fragment>
                    <p tabIndex={0} className={styles["section-paragraph"]}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <ul>
                      <li tabIndex={0}>List item #1</li>
                      <li tabIndex={0}>List item #2</li>
                      <li tabIndex={0}>List item #3</li>
                    </ul>
                  </React.Fragment>
                }
              />
            }
          />
          <InternationalVisitor
            reverse={true}
            image={<Image src={travelTopics} alt="" />}
            content={
              <Content
                header="Insurance for International Visitor"
                children={
                  <p tabIndex={0} className={styles["section-paragraph"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                }
              />
            }
          />
        </section>
        <section>
          <TravelTopics>
            {arr.map((item, index) => (
              <Topic
                src={item.src}
                alt={item.altr}
                caption={item.caption}
                key={index.toString()}
              />
            ))}
          </TravelTopics>
        </section>
        <article className={styles["posts"]}></article>
        <section className={styles["contact"]}></section>
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
