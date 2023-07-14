import React from "react";
import cn from "./Sidebar.module.css";

const Sidebar = (props) => {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? cn.selectedNote : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className={cn.textSnippet}>Note {index + 1}</h4>
      </div>
    </div>
  ));

  return (
    <section className={`${cn.pane} ${cn.sidebar}`}>
      <div className={cn.header}>
        <h3>Notes</h3>
        <button className={cn.newNote} onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};

export default Sidebar;
