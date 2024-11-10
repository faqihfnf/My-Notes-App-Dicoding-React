import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody() {
  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Daftar Catatan</h2>
      <NoteList />
    </div>
  );
}

export default NoteBody;
