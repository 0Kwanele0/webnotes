import { useState, useContext, useRef } from "react";
import styles from './styles/subnav.module.scss'
import SubpageContext from "../context/subpages";

function SubNav() {
  const notes = useRef<HTMLLIElement>(null);
  const todos = useRef<HTMLLIElement>(null);
  const workflow = useRef<HTMLLIElement>(null);

  const { page, setPage } = useContext(SubpageContext)

  const [linkClicked, setLinkClicked] = useState("notes");

  function linksClicked(e: React.FormEvent) {
    const value = e.target as HTMLElement
    switch (value.innerText) {
      case "Notes":
        console.log("Notes page")
        setPage(1)
        break
      case "Todos":
        console.log("Todos page ")
        setPage(2)
        break
      case "WorkFlow":
        console.log("WorkFlow page")
        setPage(3)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.subnav}>
      <ul className={styles.subnav__navigation}>
        <li onClick={linksClicked} className="text-xl" ref={notes}>Notes</li>
        <li onClick={linksClicked} className="text-xl" ref={todos}>Todos</li>
        <li onClick={linksClicked} className="text-xl" ref={workflow}>WorkFlow</li>
      </ul>
    </div>
  );
}

export default SubNav;
