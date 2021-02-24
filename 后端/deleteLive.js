/**
删除文件里的视频
然后再删除LiveList里的视频
{
  id:"xxx-xxx-xxx"
}
  */
 module.exports = async function(params, context) {
    console.log(params);
    try{
      const id = params.id;
      const liveTable = inspirecloud.db.table("LiveInfo");
      const live = await liveTable.where({_id:ObjectId(id)}).findOne();
  
  
      const result = await liveTable.delete(live);
  
      return {
       result
     };
    }
    catch(error)
    {
      context.status(404);
      return "failed";
    }
  
  
  }