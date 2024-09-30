import React from 'react'
import { useSelector } from 'react-redux'

const Like = () => {
  const likeProduct = useSelector((state) => state);
  console.log(likeProduct);
  return (
    <div>
      {likeProduct?.likeCart?.likeCart?.map((likes) => (
        <img src={likes?.image} alt="" />
      ))}
    </div>
  )
}

export default Like