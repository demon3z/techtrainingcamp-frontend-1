// 点赞动效
import React, { useState } from 'react'
import Lottie from 'react-lottie'

import AnimationData from './8041-like-button.json'

const LikeButton = () => {
  // 配置动效的渲染选项
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
      <Lottie className="lottie"
        options={defaultOptions}
        height={42.4}
        width={50}
      ></Lottie>
  )
}

export default LikeButton;