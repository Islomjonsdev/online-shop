import React from 'react'
import { useSelector } from 'react-redux'

const Like = () => {
  const likeProduct = useSelector((state) => state);
  console.log(likeProduct);
  return (
    <div>Like</div>
  )
}

export default Like