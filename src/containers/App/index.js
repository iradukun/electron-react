import React, {useState} from 'react'
import SVG from 'react-inlinesvg'

import logo from '../../../assets/logo.svg'
import './App.css'

function App() {
  const [profiles, setProfiles] = useState([]);
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState('');
  const handlePostSubmit = (id) => {
    setPostId(id);
  };
  return (
    <div className="App">
     <h1>Facebook Commenter</h1>
      <PostForm onSubmit={handlePostSubmit} />
      <ProfileList profiles={profiles} setProfiles={setProfiles} />
      <CommentList comments={comments} setComments={setComments} />
      {/* TODO: Add component for selecting reaction */}
      {/* TODO: Add button for starting comment process */}
    </div>
  )
}

export default App
