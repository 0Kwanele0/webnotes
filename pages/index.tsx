import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import WorkFlow from "../subpages/WorkFlow";
import Todos from '../subpages/Todos'
import Notes from '../subpages/Notes'
import subpageContext from '../context/subpages'
import { useContext } from 'react'
import SubpageContext from "../context/subpages";

const Home: NextPage = () => {
  const { page } = useContext(SubpageContext)
  return (
    <div className="container mx-auto">
      <div className={styles.grid}>
        {page == 1 ? <Notes /> : page == 2 ? <Todos /> : <WorkFlow />}
      </div>
    </div>
  );
};

export default Home;
