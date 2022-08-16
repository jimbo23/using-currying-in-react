import React from 'react';

/**
 * Consider a scenario where you need some data for analytics
 * You need to tell which button / any other HTML elements are clicked
 */

const Example2 = () => {
  /** Instead of doing this: 👇🏼❌ 
    const handleClick1 = (e) => {
      console.log('button 1 is clicked')
      window.open('https://www.google.com/')
    } 

    const handleClick1 = (e) => {
      console.log('button 2 is clicked')
      window.open('https://www.youtube.com/')
    } 
   */

  /** Do this: 👇🏼✅ */
  const handleClick = (url) => (buttonId) => (e) => {
    console.log(`${e.target.tagName} ${buttonId} is clicked`);
    window.open(url);
  };

  return (
    <div style={{ margin: 10 }}>
      <strong>Example2: </strong>
      <div>
        <button onClick={handleClick('https://www.google.com/')(1)}>
          Button that goes to google.com
        </button>
      </div>
      <div>
        <button onClick={handleClick('https://www.youtube.com/')(2)}>
          Button that goes to youtube.com
        </button>
      </div>
    </div>
  );
};

export default Example2;
