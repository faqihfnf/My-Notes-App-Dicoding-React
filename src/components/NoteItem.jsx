import React from "react";

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
          {archived ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
