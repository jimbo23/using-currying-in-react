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
    <div style={{ margin: 10 }}>
      <strong>Example 1:</strong>
      <div>
        <label>value 1: </label>
        <input value={value1} onChange={handleInput(setValue1)} />
      </div>
      <div>
        <label>value 2: </label>
        <input value={value2} onChange={handleInput(setValue2)} />
      </div>
    </div>
  );
};

export default Example1;
