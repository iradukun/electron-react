import React from 'react';

function ProfileList({ profiles, setProfiles }) {
  const handleAddProfile = () => {
    const newProfile = {
      username: '',
      password: '',
      proxy: '',
      cookies: '',
    };
    setProfiles([...profiles, newProfile]);
  };

  const handleProfileChange = (index, field, value) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index][field] = value;
    setProfiles(updatedProfiles);
  };

  const handleProfileRemove = (index) => {
    const updatedProfiles = [...profiles];
    updatedProfiles.splice(index, 1);
    setProfiles(updatedProfiles);
  };

  return (
    <div>
      <h2>Profiles</h2>
      <button onClick={handleAddProfile}>Add Profile</button>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index}>
            <input
              type="text"
              value={profile.username}
              onChange={(e) =>
                handleProfileChange(index, 'username', e.target.value)
              }
            />
            <input
              type="password"
              value={profile.password}
              onChange={(e) =>
                handleProfileChange(index, 'password', e.target.value)
              }
            />
            <input
              type="text"
              value={profile.proxy}
              onChange={(e) =>
                handleProfileChange(index, 'proxy', e.target.value)
              }
            />
            <textarea
              value={profile.cookies}
              onChange={(e) =>
                handleProfileChange(index, 'cookies', e.target.value)
              }
            />
            <button onClick={() => handleProfileRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
