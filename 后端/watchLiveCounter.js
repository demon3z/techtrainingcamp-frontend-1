/**
统计累计观看直播人数
{
  id:"xxxx"
}
  */
 module.exports = async function(params, context) {
    console.log(params);
  
    try{
      const liveTable = inspirecloud.db.table("LiveInfo");
      const live = await liveTable.where({_id:ObjectId(params.id)}).findOne();
      live.views += 1
      const result = await liveTable.save(live);
      return result;
    }
    catch(error){
      context.status(404);
      console.log(error);
      return "can not find this live"
    }
  
  
  
  
  
  
  
  }