/**
获取所有可播放视频列表
无参数
  */
 module.exports = async function(params, context) {
    console.log(params);
    try{
      const videoTable = inspirecloud.db.table("VideoInfo");
      const videoList = await videoTable.where().find();
      return videoList;
    }
    catch(error)
    {
      context.status(404);
      return "NOT FOUND";
    }
    
  }