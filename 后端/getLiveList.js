/**
获取所有直播列表
无参数
  */
 module.exports = async function(params, context) {
    console.log(params);
  
    try{
      const liveTable = inspirecloud.db.table("LiveInfo");
      const liveList = await liveTable.where().find();
      return liveList;
    }
    catch(error){
      context.status(404);
      return "NOT FOUND";
    }
    
  }