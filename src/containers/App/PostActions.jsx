import React from 'react';
import { Button } from 'antd';
import { performActions } from './script.js';

export default function PostActions() {
  const profiles = [
    { username: 'user1', password: 'password1', proxy: 'proxy1', cookies: 'cookies1' },
    { username: 'user2', password: 'password2', proxy: 'proxy2', cookies: 'cookies2' },
    { username: 'user3', password: 'password3', proxy: 'proxy3', cookies: 'cookies3' }
  ];
  const comments = [
    'Great post!',
    'Love this!',
    'Awesome content!'
  ];
  const postURL = 'https://www.example.com/post123';

  const handleClick = async () => {
    for (const profile of profiles) {
      await performActions(profile, comments, postURL);
    }
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Perform Actions
    </Button>
  );
}
