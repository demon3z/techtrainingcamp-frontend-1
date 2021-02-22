import React, { useState } from 'react';
import "./TabBar.scss";
import { PlusOutlined } from '@ant-design/icons'

// 底部导航栏
function TabBar() {
  const [index, setIndex] = useState(0);


  return (
    <div className="TabBar">
      <div className="tabBarOptions">
        <a className={index===0 ?"checked":""} onClick={()=>setIndex(0)}>首页</a>
        <a className={index===1 ?"checked":""} onClick={()=>setIndex(1)}>朋友</a>
        <a className="upLoad"><div className="uploadInner"><PlusOutlined/></div></a>
        <a className={index===3 ?"checked":""} onClick={()=>setIndex(3)}>消息</a>
        <a className={index===4 ?"checked":""} onClick={()=>setIndex(4)}>我</a>
      </div>
    </div>
  );
}

export default TabBar;