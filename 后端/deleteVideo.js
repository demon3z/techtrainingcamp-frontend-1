/**
删除文件里的视频
然后再删除VideoList里的视频
{
  id:"xxx-xxx-xxx"
}
  */
 module.exports = async function(params, context) {
    console.log(params);
    try{
      const id = params.id;
      const videoTable = inspirecloud.db.table("VideoInfo");
      const video = await videoTable.where({_id:ObjectId(id)}).findOne();
      const fileId = video.file_id;
      const posterId = video.poster_id;
  
      const fileTable = inspirecloud.db.table("_file");
      const file = await fileTable.where({_id:fileId}).findOne();
  
      const poster = await fileTable.where({_id:posterId}).findOne();
  
      const result1 = await fileTable.delete(file);
      const result2 = await videoTable.delete(video);
  
      if(poster){
        var result3 = await fileTable.delete(poster);
      }
  
  
      return {
       result1,
       result2,
       result3
     };
    }
    catch(error)
    {
      console.log(error);
      context.status(404);
      return "failed";
    }
  
  
  }