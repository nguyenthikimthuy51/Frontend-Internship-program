import React, { useState } from 'react';

function UseStatePractice() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <p>You clicked {count} times</p>
      <button 
      onClick={() => setCount(count + 1)}
      className='bg-blue-700 text-white px-5 py-2 rounded-full'
      >
        Click me
      </button>
    </div>
  );
}

export default UseStatePractice;