import React from "react";

const UserForm = (props) => {
  function showEmptyFieldWarning(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.addUser(formData.get("username"), formData.get("age"));
  }
  return (
    <div className="columns is-centered main-column">
      <div className="column is-two-thirds has-background-white p-5 form-column">
        <form onSubmit={showEmptyFieldWarning} className="form">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Username"
                name="username"
              />
            </div>
            <p className="help">This is a help text</p>
          </div>
          <div className="field">
            <label className="label">Age (Years)</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Age"
                name="age"
              />
            </div>
            <p className="help">This is a help text</p>
          </div>
          <div className="control">
            <button className="button is-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
