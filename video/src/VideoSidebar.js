import React, {useState} from "react";
import "./VideoSidebar.scss"
import { HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons'
import LikeButton from "./component/LikeButton"

// 右侧工具栏：点赞 评论 转发
function VideoSidebar({ icon, likes, shares, comments}) {
  const [liked, setLiked] = useState(false);

  function num2string(n) {
    if (n > 9999)
      return String(Math.floor( n / 10000)) + 'w';
    return String(n)
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar-button">
        <div className="profile"><img src={icon}/></div>
      </div>
      <div className="videoSidebar-button" onClick={() => setLiked(!liked)}>
        {liked ? (
          <LikeButton />
        ) : (
          <HeartFilled/>
        )}
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