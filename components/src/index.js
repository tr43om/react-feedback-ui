import react from "react";
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Dima"
        timeAgo="Today at 3:21 pm"
        text="Nice cock bro!"
      />
      <CommentDetail
        author="Sanya"
        timeAgo="Today at 5:01 am"
        text="The real king"
      />
      <CommentDetail
        author="Vitya"
        timeAgo="Today at 9:23 pm"
        text="You are churka"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
