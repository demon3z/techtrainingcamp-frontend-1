/**
POST
{
  id:"xxx-xxx",
  author:"",
  description:"",
  likes:0,
  comments:0,
  shares:0,
  tagList:"tag1 tag2 tag3" //用空格分开的字符串
  bgm:"music - 歌手"
}
*/
module.exports = async function(params, context) {
    console.log(params);
    try{
      const videoTable = inspirecloud.db.table("VideoInfo");
      const video = await videoTable.where({_id:ObjectId(params.id)}).findOne();
  
      video.author = typeof(params.author)=="undefined"?video.author:params.author;
      video.description = typeof(params.description)=="undefined"?video.description:params.description;
      video.likes = typeof(params.likes)=="undefined"?video.likes:parseInt(params.likes);
      video.comments = typeof(params.comments)=="undefined"?video.comments:parseInt(params.comments);
      video.shares = typeof(params.shares)=="undefined"?video.shares:parseInt(params.shares);
      video.tagList = typeof(params.tagList)=="undefined"?video.tagList:(params.tagList===""?[]:params.tagList.split(" "));
      video.bgm = typeof(params.bgm)=="undefined"?video.bgm:params.bgm;
  
      const result =  await videoTable.save(video);
      return result;
    }
    catch(error){
      console.log(error)
      context.status(404);
      return "failed";
    }
  }