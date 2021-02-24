/**
获取评论
{
  "live_id":"xx",
  "time":1614058436000,
  "selectAll":true
}
  */
 module.exports = async function(params, context) {
    console.log(params);
    const live_id = params.live_id;
    const time = params.time;
    try{
      const commentTable = inspirecloud.db.table("Comment");
      const comments = await commentTable.where({live_id:ObjectId(live_id)}).find();
      const ret1 = comments.map(({_id, author, content, createdAt})=>{
        let t = Date.parse(createdAt);
        return {_id,author, content, t}
      })
  
      const sorted = ret1.sort((o1,o2)=>{
        let t1 = o1.t, t2 = o2.t;
        if(t1 < t2){
          return -1;
        }
        else if(t1 > t2){
          return 1;
        }
        else{
          return 0;
        }
      })
  
      if(params.selectAll){//如果返回某直播的全部评论
        return sorted;
      }
      //否则根据参数time返回部分评论
      const ret2 = sorted.filter((item)=>{
        return item.t > time;
      })
      return ret2;
    }
    catch(error){
      console.log(error)
      context.status(404);
      return "NOT FOUND";
    }
  
  }