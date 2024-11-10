import React from "react";

function NoteAction({ id, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button onClick={() => onArchive(id)}>Arsipkan</button>
      <button onClick={() => onDelete(id)}>Hapus</button>
    </div>
  );
}

export default NoteAction;
