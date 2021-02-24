/**
删除Comment表里的某一行
{
  "id":"60348a336e0e46028c71efc7"
}
  */
 module.exports = async function(params, context) {
    console.log(params);
    try{
      const id = params.id;
      const commentTable = inspirecloud.db.table("Comment");
      const comment = await commentTable.where({_id:ObjectId(id)}).findOne();
  
  
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