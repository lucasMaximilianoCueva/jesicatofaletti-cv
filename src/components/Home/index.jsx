import React from "react";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.iframe}>
        <iframe
          title="main"
          width={600}
          height={600}
          src="https://embed.lottiefiles.com/animation/89963"
        ></iframe>
      </div>
      <div className={styles.titles}>
        <h1>
          Product Designer
          <br />
          Jesica Tofaletti
        </h1>
      </div>
      <div className={styles.titles}>
        <h2>Design & Visual Comunication</h2>
      </div>
      <div id="prueba" className={styles.titles}>
        <h2>UX/ UI Designer</h2>
      </div>
    </main>
  );
};

export default Home;
