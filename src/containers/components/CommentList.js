import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <p>Reacted with: {comment.reaction}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
