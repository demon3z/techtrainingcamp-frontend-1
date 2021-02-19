import React, { useState, useEffect } from "react";
import Video from "./Video";
import TabBar from "./TabBar"
import NavBar from "./NavBar"

import "./App.scss";
import axios from 'axios'

function App() {
  const [videos, setVideos] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  // const H = document.body.clientHeight;
  // useEffect(() => {
  //   axios.get("/video.json").then((response) => {
  //     const videos = response.data;
  //     if (videos.code === 0) {
  //       setVideos(videos.data)
  //     }
  //   });
  // },[]);

  // function handleScroll(currentItem) {
  //   // 获取滚动条位置,计算当前窗口内视频index,确定自动播放的视频
  //   var y = (document.getElementsByClassName("app-videos")[0]).scrollTop;
  //   var newItem = Math.floor(y / H)
  //   if (newItem !== currentItem)
  //     setCurrentItem(newItem);
  //     // console.log("new", newItem);
  // }

  // function query(selector) {
  //   // 获取观察列表
  //   return Array.from(document.querySelectorAll(selector));
  // }
  
  // var observer = new IntersectionObserver(
  //   // 通过判断当前元素是否在视窗内可见实现懒加载
  //   function(changes) {
  //     changes.forEach(function(change) {
  //       var container = change.target;
  //       var content = container.querySelector('app-videos').content;
  //       container.appendChild(content);
  //       observer.unobserve(container);
  //       // 停止观察
  //     });
  //   }
  // );
  
  // query('video').forEach(function (item) {
  //   observer.observe(item);
  // });

  useEffect(()=> {
    axios.get("https://qck2s3.fn.thelarkcloud.com/getVideoList").then((response) => {
      const videos = response.data;
      setVideos(videos)
    });
  },[]);

  return (
    // BEM
    <div className="app">
      {/* <div className="app-videos" onScroll={handleScroll}> */}
      <div className="app-videos">
        {videos.map(
          ({ url, author, description, tagList, icon, likes, comments, shares, bgm }, index) => (
            <Video
              className={"video"}
              key={index}
              index={index}
              currentItem={currentItem}
              url={url}
              author={author}
              description={description}
              tagList={tagList}
              icon = {icon}
              likes={likes}
              comments={comments}
              shares={shares}
              bgm={bgm} 
            />
          )
        )}
      </div>
      <NavBar />
      <TabBar />
    </div>
  );
}

export default App;
