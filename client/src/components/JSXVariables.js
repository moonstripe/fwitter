import React from "react";

function JSXVariables(props) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {props.name}</h1>
          <h2>My name has {props.name.length} letters</h2>
          <h2>{props.thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
