import React, {useState} from "react";
import "./VideoSidebar.scss"
import { HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons'
import LikeButton from "./component/LikeButton"
import axios from 'axios'

// 右侧工具栏：点赞 评论 转发
function VideoSidebar({ id, icon, likes, shares, comments}) {
  const [liked, setLiked] = useState(false);

  // 评论数超过一万
  function num2string(n) {
    if (n > 9999)
      return String(Math.floor( n / 10000)) + 'w';
    return String(n)
  }

  // 点击小心心,切换动效并向后端发送数据
  function handleClick() {
    setLiked(!liked);
    var data;
    if (liked)
      data = {"id":id,"isLike":false};
    else
      data = {"id":id,"isLike":true};
    console.log(data);
    axios.post("https://qck2s3.fn.thelarkcloud.com/likeVideo", data)
    .then((response)=>{
      console.log('res=>', response);
    })
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar-button">
        <div className="profile"><img src={icon} /></div>
      </div>
      <div className="videoSidebar-button" onClick={handleClick}>
        {liked ? (<LikeButton />) : (<HeartFilled/>)}
        <p>{liked ? num2string(likes + 1) : num2string(likes)}</p>
      </div>
      <div className="videoSidebar-button">
          <MessageFilled/>
          <p>{comments}</p>
      </div>
      <div className="videoSidebar-button">
        <ShareAltOutlined/>
        <p>{num2string(shares)}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;