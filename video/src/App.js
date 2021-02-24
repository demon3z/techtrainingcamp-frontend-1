import React, { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';
import "./App.scss";
import axios from 'axios'

import Video from "./Video";
import TabBar from "./TabBar"
import NavBar from "./NavBar"

function App() {
  const [videos, setVideos] = useState([]);

  // 获取播放列表
  // useEffect(()=> {
  //   axios.get("https://qck2s3.fn.thelarkcloud.com/getVideoList").then((response) => {
  //     const videos = response.data;
  //     console.log(videos);
  //     setVideos(videos);
  //   });
  // },[]);

  useEffect(() => {
      axios.get("/video.json").then((response) => {
        const videos = response.data;
        if (videos.code === 0) {
          setVideos(videos.data)
        }
      });
    },[]);

  // 创建视频播放组件
  // 懒加载,组件距离视窗100px时开始加载
  // 单个视频组件高度等于body高度+1
  function showVideo(videos) {
    return videos.map(
      ({ _id, url, author, description, tagList, icon, likes, comments, shares, bgm}) => {
        return (
          <LazyLoad key={url} overflow={true} height={document.body.clientHeight+1}>
            <Video
              id = {_id}
              url={url}
              height={document.body.clientHeight+1}
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

  return (
    // BEM
    <div className="app">
      <div className="app-videos">
        {showVideo(videos)}
      </div>
      <NavBar />
      <TabBar />
    </div>

  );
}

export default App;
