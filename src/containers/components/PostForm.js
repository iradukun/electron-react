import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [postId, setPostId] = useState('');
  const [comments, setComments] = useState([]);
  const [profiles, setProfiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ postId, comments, profiles });
  };

  const handlePostIdChange = (e) => {
    setPostId(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value.split('\n'));
  };

  const handleProfilesChange = (e) => {
    setProfiles(e.target.value.split('\n'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Post ID:
        <input type="text" value={postId} onChange={handlePostIdChange} />
      </label>
      <br />
      <label>
        Comments (one per line):
        <textarea value={comments.join('\n')} onChange={handleCommentsChange} />
      </label>
      <br />
      <label>
        Profiles (one per line):
        <textarea value={profiles.join('\n')} onChange={handleProfilesChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
