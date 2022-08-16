import React from 'react';

const Example1 = () => {
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  /** Instead of doing this: 👇🏼❌ 
  
    const handleInput1 = (e) => {
    setValue1(e.target.value);
   };

    const handleInput2 = (e) => {
    setValue2(e.target.value);
  };
  */

  /** Do this: 👇🏼✅ */
  const handleInput = (stateFn) => (e) => stateFn(e.target.value);

  return (
    <>
      <h3>Strong Currying pattern for handling Event</h3>
      <div>
        <label>value 1</label>
        <input value={value1} onChange={handleInput(setValue1)} />
      </div>
      <div>
        <label>value 2</label>
        <input value={value2} onChange={handleInput(setValue2)} />
      </div>
      <p>value1: {value1}</p>
      <p>value2: {value2}</p>
    </>
  );
};

export default Example1;
