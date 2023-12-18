import React, { useState } from 'react';

const Visibilecomponent=() => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Button</button>
      {isVisible && <p>Hi! Priyam, this side...</p>}
    </div>
  );
};

export default Visibilecomponent;
