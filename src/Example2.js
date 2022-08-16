import React from 'react';

/**
 * Consider a scenario where you need some data for analytics
 * You need to tell which button / any other HTML elements are clicked
 */

const Example2 = () => {
  /** Instead of doing this: 👇🏼❌ 
    const handleClick1 = (e) => {
      console.log('button 1 is clicked')
    } 

    const handleClick1 = (e) => {
      console.log('button 2 is clicked')
    } 
   */

  /** Do this: 👇🏼✅ */
  const handleClick = (buttonId) => (e) => {
    console.log(`${e.target.innerHTML} ${buttonId} is clicked`);
  };

  return (
    <>
      <strong>Example2: </strong>
      <div>
        <button onClick={handleClick(1)}>Button</button>
      </div>
      <div>
        <button onClick={handleClick(2)}>Button</button>
      </div>
    </>
  );
};

export default Example2;
