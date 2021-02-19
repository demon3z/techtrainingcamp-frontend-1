import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.scss";
// import Xgplayer from 'xgplayer-react';
import MusicRecord from "./component/MusicRecord"



// 视频播放,底部信息,侧边点赞评论转发
// 视频暂停时,CD暂停旋转
function Video({ index, currentItem, url, author, description, tagList, icon, likes, comments, shares, bgm }) {
  const [playing, setPlaying] = useState(false);
  // if(index===currentItem)
  //   setPlaying(true);

  const videoRef = useRef(null);
  // console.log(currentItem, index)
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // 西瓜播放器配置
  // let config = {
  //   id: 'mse',
  //   url: url,
  //   controls: false,
  //   width: '100%',
  //   height: '100%',
  //   autoplay: false,
  //   loop: true,
  //   videoInit: true,
  // };
  // let Player = null;
  
  // 生成 #tag #tag
  function createTag(tagList){
    if(tagList.length === 0)
      return ""
    return " #" + tagList.join(' #')
  }

  return (
    <div className="video">
      <video
        className="video-player"
        // autoPlay
        // muted
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
         
      ></video>
      {/* <Xgplayer config={config} playerInit={(player)=>{ Player = player; }} /> */}
      
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
