import { useState } from "react";

function LikeButton() {
  const [likesCount, setLikesCount] = useState(0);

  function handleLikeClick() {
    setLikesCount(likesCount + 1);
  }

  return (
    <div className='button'>
      <button onClick={handleLikeClick} className='btprincipal'>Like</button>
      <p className="likep">{likesCount} likes</p>
    </div>
  );
}

export default LikeButton