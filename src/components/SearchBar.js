import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormsubmit = event => {
    event.preventDefault();
    this.props.onSubmits(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormsubmit} className="ui from">
          <div className="field">
            <label>Image Search</label>
            <br />
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
            {/* we can change event to any other name also as it is a parameter */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
