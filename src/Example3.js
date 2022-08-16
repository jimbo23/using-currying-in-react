import React from 'react';

const Example3 = () => {
  const handleClick = (args) => (e) => {
    /**
     * this is the time when the handleClick(args) function is called
     * it is called when the component renders. 👇🏼
     */
    console.log('this is the created time', args);
    /**
     * this is the time when the handleClick function is actually called
     * when the div is clicked. 👇🏼
     */
    console.log('this is actually the click time ' + new Date().getTime());
  };
  return (
    <div style={{ margin: 10 }}>
      <strong>Example 3: </strong>
      <div onClick={handleClick(new Date().getTime())}>
        Time actually get called
      </div>
    </div>
  );
};

export default Example3;
