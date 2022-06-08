import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.note}>
          <h2>Learn TypeScript</h2>
          <p>
            Created with for front-end developers who need a quick back-end for
            prototyping and mocking.
          </p>
        </div>
        <div className={styles.note2}>
          <h2>Learn TypeScript</h2>
          <p>
            Created with for front-end developers who need a quick back-end for
            prototyping and mocking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
