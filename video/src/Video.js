import React, { useEffect, useReducer, useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.scss";
import MusicRecord from "./component/MusicRecord";
// import ReactDOM from "react-dom"

// 视频播放,底部信息,侧边点赞评论转发
// 视频暂停时,CD暂停旋转
function Video (props) {
  let videoRef = useRef(null);
  // console.log(props)
  let{ url, height, author, description, tagList, icon, likes, comments, shares, bgm } = props
  const [playing, setPlaying] = useState(false);

  const viewRef = useRef(null);
  // viewRef.style.height = height + 'px';
  // console.log(groupName, author, 1,curPlaySrc, 2,url);
  // useEffect(() => {
  //   // 当应该播放的视频的url等于此视频组件的src时,播放该视频
  //   if(curPlaySrc === url) {
  //     setPlaying(true)
  //     videoRef.current.play();
  //   }
  // }, [curPlaySrc])
  
  // 点击视频,在播放与暂停之间切换
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  
  // 生成 #tag #tag
  function createTag(tagList){
    if(tagList.length === 0)
      return ""
    return " #" + tagList.join(' #')
  }

  return (
    <div style={height={height}} className="Video">
      <video
        className="video-player"
        // autoPlay
        muted
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      />
      
      <div className="video-pause" 
        style={{display:playing ? "none" : "block"}}
        onClick={onVideoPress}
      >
        <img className="pause-icon" src="/pause.png" />
      </div>
      <VideoFooter
        author={author} description={description} tagList={createTag(tagList)}
        bgm={bgm}
      />
      <VideoSidebar icon={icon} likes={likes} comments={comments} shares={shares}/>
      <div className="music-record">
        <MusicRecord playing={playing}/>
      </div>
    </div>
  );
}

export default Video;
