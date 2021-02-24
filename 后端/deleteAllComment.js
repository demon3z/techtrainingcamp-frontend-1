/**
删除Comment表里的多行
把live_id匹配到的全删除
删除某一个直播源时，就顺带着把所有的评论删除掉
{
 "live_id":"602cc4f07413ab01f95f91a8"
}
  */
 module.exports = async function(params, context) {
    console.log(params);
    try{
      const live_id = params.live_id;
      const commentTable = inspirecloud.db.table("Comment");
      const comment = await commentTable.where({live_id:ObjectId(live_id)}).find();
  
  
      const result = await commentTable.delete(comment);
  
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