import React, { useState } from 'react';
import "./NavBar.scss";
import { SearchOutlined } from '@ant-design/icons'

// 顶部导航栏
function NavBar() {
  const [index, setIndex] = useState(2);


  return (
    <div className="NavBar">
      <a>直播</a>
      <a className={index===1 ?"checked":""} onClick={()=>setIndex(1)}>同城</a>
      <a className={index===2 ?"checked":""} onClick={()=>setIndex(2)}>关注</a>
      <a className={index===3 ?"checked":""} onClick={()=>setIndex(3)}>推荐</a>
      <a className="searchButton"><SearchOutlined/></a>
      
    </div>
  );
}

export default NavBar;