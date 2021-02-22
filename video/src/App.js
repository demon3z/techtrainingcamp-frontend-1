import React, { useState, useEffect, useRef, useReducer } from "react";
import LazyLoad from 'react-lazyload';
import "./App.scss";
import axios from 'axios'

import Video from "./Video";
import TabBar from "./TabBar"
import NavBar from "./NavBar"

function App() {
  const [videoHeight, setVideoHeight] = useState(0);
  const [videos, setVideos] = useState([]);

  // 获取播放列表
  useEffect(()=> {
    axios.get("https://qck2s3.fn.thelarkcloud.com/getVideoList").then((response) => {
      const videos = response.data;
      setVideos(videos);
    });
  },[]);

  // 创建视频播放组件
  // 懒加载
  // 单个视频组件高度等于body高度
  function showVideo(videos) {
    return videos.map(
      ({url, author, description, tagList, icon, likes, comments, shares, bgm}) => {
        return (
          <LazyLoad key={url} overflow height={667}>
            <Video
              url={url}
              height={document.body.clientHeight}
              author={author}
              description={description}
              tagList={tagList}
              icon={icon}
              likes={likes}
              comments={comments}
              shares={shares}
              bgm={bgm} 
            />
          </LazyLoad>
        );
      }
    )
  }

  // 视频懒加载
  // useEffect(() => {
  //   let observerVideo = new IntersectionObserver(
  //     (entries, observer) => {
  //       console.log(entries);
  //       entries.forEach(entry => {
  //         // 当移入区域后，播放视频
  //         console.log("entry", entry.intersectionRatio);
  //         if (entry.intersectionRatio === 1) {
  //           // 设置当前视频的src
  //           setCurPlaySrc(entry.target.url);
  //           console.log('000000000000',curPlaySrc);
  //           return;
  //         }
  //         // 停止监听
  //         observer.unobserve(entry.target);
  //       });
  //     },
  //     {
  //       // root为监听的窗口
  //       root: document.getElementById("scrollView"),
  //       threshold:1
  //     }
  //   );
    // 监听每一个Video组件
    // var videoItems = document.querySelectorAll('div');
  //   var videoItems = document.querySelectorAll('.video-item');
  //   console.log(videoItems);
  //   console.log('开始遍历');
  //   [].forEach.call(videoItems, function(video) {
  //     console.log(1, video);
  //     // observerVideo.observe(video);
  //   });
  // },[])

  return (
    // BEM
    <div className="app">
      <div className="app-videos" id="scrollView">
        {showVideo(videos)}
      </div>
      <NavBar />
      <TabBar />
    </div>

  );
}

export default App;
