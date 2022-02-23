import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [addUserList, setaddUserList] = useState([]);

  const addUserHandler = (uname, uage) => {
    setaddUserList((prev) => {
      return [
        ...prev,
        { username: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={addUserList} />
    </div>
  );
}

export default App;
