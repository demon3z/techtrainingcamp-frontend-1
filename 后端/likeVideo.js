/**
给视频点赞
参数
{
  id:"xxxxx-xxxx-xxxx",
  isLike": true/false
}
  */
 module.exports = async function(params, context) {
    console.log(params);
  
    try{
      const videoTable = inspirecloud.db.table("VideoInfo");
      const video = await videoTable.where({_id:ObjectId(params.id)}).findOne();
      if(params.isLike === true){
        video.likes += 1
      }
      else if(params.isLike === false && video.likes >= 1){
        video.likes -= 1
      }
      else{
        throw "param format error or number error"
      }
      const result = await videoTable.save(video);
      return result;
    }
    catch(error){
      context.status(404);
      return "like failed"
    }
  
  
  
  
  
  
  
  }