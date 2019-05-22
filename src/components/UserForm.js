import React from "react";

class UserForm extends React.Component {
  createUser(event) {
      event.preventDefault();
    console.log("create User");
  }

  render() {
    return (
      <form className="user-form" onSubmit={this.createUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="id" placeholder="Identification" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="birthday" placeholder="Birthday" />
        <input type="text" name="github" placeholder="Github User" />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default UserForm;
