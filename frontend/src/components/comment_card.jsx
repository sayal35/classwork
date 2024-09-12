import "./styles/comment_card.css";
import { FaUserCircle, FaThumbsUp, FaShare, FaReply } from "react-icons/fa"; // Icons for user and actions

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <FaUserCircle className="user-icon" />
        <div className="comment-details">
          <h2>{comment.name}</h2>
          <p className="comment-email">{comment.email}</p>
        </div>
      </div>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
      <div className="comment-actions">
        <button className="action-btn">
          <FaThumbsUp /> Like
        </button>
        <button className="action-btn">
          <FaShare /> Share
        </button>
        <button className="action-btn">
          <FaReply /> Reply
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
