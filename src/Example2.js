import React from 'react';

const Example2 = () => {
  const handleClick = (arg) => (e) => {
    console.log(`${e.target.innerHTML} ${arg}`);
  };

  return (
    <>
      <strong>Example2: </strong>
      <div>
        <button onClick={handleClick('was clicked')}>Press me</button>
      </div>
    </>
  );
};

export default Example2;
