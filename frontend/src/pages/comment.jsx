import { useEffect, useState } from "react";
import "../styles/comment.css";
import CommentCard from "../components/comment_card";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setAllComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div id="comments">
      <h1 id="title">All Comments</h1>
      <div id="comment-grid">
        {allComments &&
          allComments.map((comment) => {
            return <CommentCard comment={comment} key={comment.id} />;
          })}
      </div>
    </div>
  );
};

export default Comments;
