import React, {useState} from 'react'
import PostForm from '../components/PostForm';
import ProfileList from '../components/ProfileList';
import CommentList from '../components/CommentList';
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
