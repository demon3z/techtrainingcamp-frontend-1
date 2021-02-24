/**
POST
{
  "id":"6034895b2010a4017eba7777",
  "author":"newauthor",
  "content":"new content"
}
*/
module.exports = async function(params, context) {
    console.log(params);
    try{
      const commentTable = inspirecloud.db.table("Comment");
      const comment = await commentTable.where({_id:ObjectId(params.id)}).findOne();
      comment.author = typeof(params.author)=="undefined"?comment.author:params.author;
      comment.content = typeof(params.content)=="undefined"?comment.content:params.content;
     
      const result =  await commentTable.save(comment);
      return result;
    }
    catch(error){
      console.log(error)
      context.status(404);
      return "failed";
    }
  }