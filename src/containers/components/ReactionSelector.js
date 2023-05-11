import React, { useState } from 'react';

const ReactionSelector = ({ onReactionSelect, reactions }) => {
  const [selectedReaction, setSelectedReaction] = useState(reactions[0]);

  const handleReactionSelect = (reaction) => {
    setSelectedReaction(reaction);
    onReactionSelect(reaction);
  };

  return (
    <div>
      <h3>Select reaction:</h3>
      <div>
        {reactions.map((reaction, index) => (
          <button
            key={index}
            style={{ backgroundColor: selectedReaction === reaction ? 'gray' : 'white' }}
            onClick={() => handleReactionSelect(reaction)}
          >
            {reaction}
          </button>
        ))}
      </div>
    </div>
  );
};

const CommentButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Start commenting
    </button>
  );
};
