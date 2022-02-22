import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h2>The welcome Page</h2>
      <Route path="/welcome/new-user">
        <p>welcome new user</p>
      </Route>
    </div>
  );
}
