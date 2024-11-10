import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      remainingChars: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;
    const remainingChars = 50 - inputTitle.length;

    if (remainingChars >= 0) {
      this.setState({
        title: inputTitle,
        remainingChars: remainingChars,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
      remainingChars: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create a new note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.remainingChars}</p>
          <input className="note-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" placeholder="Catatan..." rows="10" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
