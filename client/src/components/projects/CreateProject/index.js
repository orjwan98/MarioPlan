import React, { Component } from 'react';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleOnSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              type="text"
              className="materialize-textarea"
              onChange={this.handleOnChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn purple lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
