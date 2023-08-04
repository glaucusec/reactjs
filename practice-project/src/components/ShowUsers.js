import React from "react";
import "./ShowUsers.css";

const ShowUsers = (props) => {
  return (
    <div className="columns is-centered main-column">
      <div className="column is-two-thirds has-background-white p-5 form-column">
        {props.data.map((user) => {
          return (
            <div className="p-1">
              <div className="column is-full column__user">{`${user.username} (${user.age} Years Old)`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowUsers;
