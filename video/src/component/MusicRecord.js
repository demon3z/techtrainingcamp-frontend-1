// CD旋转动效
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import LottieAnimationData from './animation-cd.json'

const MusicRecord = (props) => {
// function MusicRecord(props) {
  // const [isHidden, setHidden] = useState(props.ishidden)
  // const [Paused, setPaused] = useState(false);
  // console.log(0, props.playing);

  // 配置动效的渲染选项
  const defaultOptions = {
    loop: true,
    autoplay: props.playing,
    animationData: LottieAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div>
      <Lottie className="lottie"
        options={defaultOptions}
        height={100}
        width={100}
        isPaused={!props.playing}
      ></Lottie>
    </div>
      
  )
}

export default MusicRecord;