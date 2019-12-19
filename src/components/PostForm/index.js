import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;

    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  render() {
    return (
      <div className="createPost">
        <h1>Create Post</h1>
        <form
          className="createForm"
          action=""
          onSubmit={ this.handleSubmit}
        >
          <input
            type="text"
            ref={input => (this.getTitle = input)}
            required
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            ref={input => (this.getMessage = input)}
            id=""
            required
            cols="28"
            rows="5"
            placeholder="Enter Post Text"
          ></textarea>
          <br />
          <br />
          <button className="postBut">Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
