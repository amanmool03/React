import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  let userList = <p>No information available. Add new?</p>;
  if (props.users.length > 0) {
    userList = props.users.map((user) => {
      return (
        <li key={user.id}>
          {user.username} ({user.age} years old)
        </li>
      );
    });
  }
  return (
    <Card className={styles.users}>
      <ul>{userList}</ul>
    </Card>
  );
}
