/**
POST
{
  id:"xxx-xxx",
  author:"",
  description:"",
  views: 0
}
*/
module.exports = async function(params, context) {
    console.log(params);
    try{
      const liveTable = inspirecloud.db.table("LiveInfo");
      const live = await liveTable.where({_id:ObjectId(params.id)}).findOne();
      live.author = typeof(params.author)=="undefined"?live.author:params.author;
      live.description = typeof(params.description)=="undefined"?live.description:params.description;
      live.views = typeof(params.views)=="undefined"?live.views:parseInt(params.views);
      const result =  await liveTable.save(live);
      return result;
    }
    catch(error){
      console.log(error)
      context.status(404);
      return "failed";
    }
  }