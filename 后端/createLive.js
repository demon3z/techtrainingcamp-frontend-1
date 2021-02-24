/**
上传新的直播源
  */
 module.exports = async function(params, context) {

    try{
  
      const author = params.author || "匿名用户";
      const description = params.description || "无";
      const url = params.url;
      const views = params.views||0;
  
      if(typeof(url)=="undefined"){
        throw("no url");
      }
      //用户头像
      md5 = require('js-md5');
      hash = parseInt(md5(author),16) % 10;
      const fileTable = inspirecloud.db.table("_file");
      const usericon = await fileTable.where({name:"usericon"+String(hash)+".png"}).findOne();
  
      const liveTable = inspirecloud.db.table("LiveInfo");
      const newLiveItem = liveTable.create({
       author: author,
       description:description,
       url:url,
       icon:usericon.url,
       views:parseInt(views)
       });
     await liveTable.save(newLiveItem);
     return "success"
  
    }
    catch(error){
      context.status(404);
      return "create failed";
    }
  };