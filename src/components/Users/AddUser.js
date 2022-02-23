import React, { useRef } from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  //use the useRef in the context of having to just read and not
  // manipulate

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isValid, setisValid] = useState(true);
  const [error, setError] = useState();

  const AddUserHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setisValid(false);
      setError({
        title: "An error Occured",
        message: "Enter valid name and age (cannot send empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setisValid(false);
      setError({
        title: "An error Occured",
        message: "Enter valid Age (>0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={`${styles.input} ${!isValid && styles.invalid}`}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
