import "./App.css";
import React, { useState } from "react";

import "bulma/css/bulma.min.css";
import AddUserForm from "./components/AddUserForm";
import ShowUsers from "./components/ShowUsers";
import Overlay from "./components/Overlay";

function App() {
  const [users, setUsers] = useState([{ username: "Test", age: 20 }]);
  const [overlayContent, setOverlayContent] = useState(false);

  const [overlayMessage, setOverlayMessage] = useState("");

  const onChangeOverlay = (overlay) => {
    setOverlayContent(false);
  };

  const onNewUserHandler = (newUsername, newAge) => {
    if (!newUsername || !newAge) {
      setOverlayContent(true);
      setOverlayMessage("Please Enter a Valid Name and Age (non-empty value).");
    } else if (newAge < 0) {
      setOverlayContent(true);
      setOverlayMessage("Please enter a valid age ( > 0 )");
    } else {
      const user = {
        username: newUsername,
        age: newAge,
      };
      setUsers((prevState) => {
        return [user, ...prevState];
      });
    }
  };

  return (
    <div className="container">
      <Overlay
        message={overlayMessage}
        onChangeOverlay={onChangeOverlay}
        showOverlay={overlayContent}
      />
      <AddUserForm addUser={onNewUserHandler} />
      <ShowUsers data={users} />
    </div>
  );
}

export default App;
