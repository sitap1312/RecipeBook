import React from 'react';
import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);

  function likeIncr() {
    setCount(count + 1)
    console.log(count);
  }

  return (
    <div>
      <button onClick={likeIncr}>❤️ &nbsp;LIKE &nbsp;&nbsp;&nbsp;{count}</button>
    </div>
  )
};


export default LikeButton;
