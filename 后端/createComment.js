/**
{
  "live_id":"602cc4f07413ab01f95f91a8",
  "author":"user1",
  "content":"test comment"
}
  */
module.exports = async function(params, context) {
  console.log(params);
  try{
    const live_id = params.live_id;
    const author = params.author || "匿名用户";
    const content = params.content || "无";
    const liveTable = inspirecloud.db.table("LiveInfo");
    const live = await liveTable.where({_id:ObjectId(live_id)}).findOne();
    if(live==null){
      throw("live not existed");
    }
    const commentTable = inspirecloud.db.table("Comment");
    const newCommentItem = commentTable.create({
      author: author,
      content:content,
      live_id: ObjectId(live_id)
     });
    await commentTable.save(newCommentItem);
    return "success";
  }
  catch(error){
    console.log(error)
    context.status(404);
    return "creare failed";
  }
}