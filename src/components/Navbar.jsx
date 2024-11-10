import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
    this.props.onSearch(searchQuery);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>My Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan..." value={this.state.searchQuery} onChange={this.onSearchChangeEventHandler} />
        </div>
      </div>
    );
  }
}

export default Navbar;
