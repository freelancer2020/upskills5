import React, { useEffect, useState } from "react";
//react-router
import { Routes, Route } from "react-router-dom";

import Header from "../../components/header/Header";
//section components
import TravelInsurance from "../../components/sections/travel-insurance/TravelInsurance";
import InternationalVisitor from "../../components/sections/international-visitor/InternationalVisitor";
import TravelTopics from "../../components/sections/travel-topics/TravelTopics";
import Contacts from "../../components/sections/contacts/Contacts";
import ClaimReport from "../../components/sections/claim-report/ClaimReport";
import ThankYou from "../../components/sections/thank-you/ThankYou";
import PageNotFound from "../../components/sections/page-not-found/PageNotFound";
//footer
import Footer from "../../components/footer/Footer";
//blocks
import Image from "../../components/blocks/Image";

import Content from "../../components/blocks/Content";
import Topic from "../../components/blocks/Topic";
import FooterNavList from "../../components/blocks/FooterNavList";
import FootrNavHeader from "../../components/blocks/FooterNavHeader";

import styles from "./layout.module.css";
// assets
import visitor from "../../assets/international-visitor.jpg";
import travelTopics from "../../assets/travel-topics.jpg";

import renting from "../../assets/renting.jpg";
import trends from "../../assets/trends.jpg";
import popular from "../../assets/popular.jpg";
import gear from "../../assets/gear.jpg";
import profilePic from "../../assets/profilePic.png";

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

const footerNavAboutUs = [
  { name: "Newsroom", id: 1 },
  { name: "Careers", id: 2 },
  { name: "Our Story", id: 3 },
  { name: "Customer Stories", id: 4 },
];

const footerNavProducts = [
  { name: "Vacation / Holiday", id: 1 },
  { name: "Student / Scholar", id: 2 },
  { name: "Mission ", id: 3 },
  { name: "Marine Captain / Crew", id: 4 },
  { name: "Employer / Business Traveles", id: 5 },
];

const footerNavMembers = [
  { name: "Forms Library", id: 1 },
  { name: "Find a Doctor", id: 2 },
  { name: "Renew", id: 3 },
  { name: "Claims Center", id: 4 },
];
const Layout: React.FC = () => {
  const [reverse, setReverse] = useState<boolean>(false);
  useEffect(() => {
    const availWidth = window.screen.availWidth;
    window.localStorage.removeItem("personal");
    window.localStorage.removeItem("incident");
    availWidth <= 500 ? setReverse(true) : setReverse(false);
  }, []);
  return (
    <React.Fragment>
      <div className={styles["layout"]}>
        <header className={styles["header"]}>
          <Header />
        </header>
        <main tabIndex={-1} id="main">
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <section
                    id="travel-insurance"
                    aria-labelledby="Travel-Insurance"
                    className={styles["travel-insurance"]}
                  >
                    <TravelInsurance />
                  </section>

                  <section
                    id="international-visitor"
                    className={styles["travel-topics"]}
                  >
                    <InternationalVisitor
                      reverse={reverse}
                      image={<Image src={visitor} alt="" />}
                      content={
                        <Content
                          header="Insurance for International Visitor"
                          children={
                            <React.Fragment>
                              <p
                                tabIndex={0}
                                className={styles["section-paragraph"]}
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
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
                            <p
                              tabIndex={0}
                              className={styles["section-paragraph"]}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna. Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna.
                            </p>
                          }
                        />
                      }
                    />
                  </section>
                  <section id="travel-topics">
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
                  <article
                    id="posts"
                    aria-labelledby="article-header"
                    className={styles["posts"]}
                  >
                    <div className={styles["article-container"]}>
                      <h2
                        id="article-header"
                        className={styles["article-text"]}
                      >
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt"
                      </h2>
                      <div
                        aria-label="Dopnald Duck, CEO of Disney and his profle picture"
                        tabIndex={0}
                        className={styles["artilce-profile"]}
                      >
                        <img
                          className={styles["profile-pic"]}
                          src={profilePic}
                          alt=""
                        />
                        <p className={styles["article-profile-title"]}>
                          Donald Duck, CEO Disney
                        </p>
                      </div>
                    </div>
                  </article>
                  <section id="contact-us" className={styles["contact"]}>
                    <Contacts />
                  </section>
                </React.Fragment>
              }
            />
            <Route
              path="/claim-report/:step"
              element={
                <React.Fragment>
                  <section aria-describedby="claim-header">
                    <ClaimReport />
                  </section>
                </React.Fragment>
              }
            />
            <Route
              path="/about-us"
              element={
                <section id="about-us">
                  <h2
                    aria-labelledby="about-us"
                    style={{ textAlign: "center" }}
                  >
                    About us
                  </h2>
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section id="contact" aria-labelledby="contact-header">
                  <h2
                    id="contact-header"
                    style={{ textAlign: "center" }}
                  >
                    Contact
                  </h2>
                </section>
              }
            />
            <Route
              path="/Thank-you"
              element={
                <section
                  id="thank-you-section"
                  aria-labelledby="thank-you-header"
                >
                  <ThankYou />
                </section>
              }
            />
            <Route
              path="*"
              element={
                <section>
                  <PageNotFound />
                </section>
              }
            />
          </Routes>
        </main>
        <footer id="about-us">
          <Footer
            footerHeader={<FootrNavHeader />}
            footerNav={[
              <FooterNavList
                key={0}
                navHeader="About Us"
                navList={footerNavAboutUs}
              />,
              <FooterNavList
                key={1}
                navHeader="Products"
                navList={footerNavProducts}
              />,
              <FooterNavList
                key={2}
                navHeader="Members"
                navList={footerNavMembers}
              />,
            ]}
          />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
