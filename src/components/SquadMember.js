import React, { useState } from 'react';

function SquadMember(props) {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <div className="createSquadCard"
      onClick={() => {
        setShowBorder(!showBorder);
      }}
      style={
        showBorder ? { border: '3px solid #0270f2', borderRadius: '3px' } : {}
      }
    >
      {props.children}
    </div>
  );
}

export default SquadMember;
