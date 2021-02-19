// 点赞动效
import React, { useState } from 'react'
import Lottie from 'react-lottie'

import AnimationData from './8041-like-button.json'

const LikeButton = () => {
  // const [isHidden, setHidden] = useState(props.ishidden)
  
  //回调函数，向父组件返回“隐藏LikeButton"
  // const hiddenMe = (m) => {
  //   return () => {
  //     props.callback(m)
  //   }
  // }
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
        // height={90}
        // width={90}
      ></Lottie>
  )
}

export default LikeButton;