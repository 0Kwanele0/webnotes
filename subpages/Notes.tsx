import { useState } from "react";
import NotesCard from "../components/NotesCard";

function NotesPage() {
  const [notes, setNotes] = useState(["note1"]);

  return (
    <div className="container">
      <p className="text-xl">This is the Notes page. enjoy the site</p>
      <div className="container flex flex-wrap gap-3">
        <p>NOTES</p>
        <p>NOTES</p>
        <p>NOTES</p>
      </div>
    </div>
  );
}
export default NotesPage;
