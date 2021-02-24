/**
上传视频
  */
 module.exports = async function(params, context) {
    // 从请求参数中获取文件，请求 Content-Type 需要为 multipart/form-data
  
    try{
      // const {author, description, likes, comments, tagList,  myFile } = params;
      const author = params.author || "匿名用户";
      const description = params.description || "无";
      const likes = params.likes || 0;
      const comments = params.comments || 0;
      const shares = params.shares || 0;
      const tagList = params.tagList;
      const myFile = params.myFile;
      const bgm = params.bgm || "暂时无法识别";
  
      const poster = params.poster || 0;
  
  
      //处理视频文件
      var {id, url } = await inspirecloud.file.upload(
        myFile.name,
        myFile.buffer,
       {
          type: myFile.type,
          region: 'cn-bytedance-internal'
       }
      );
      const file_id = id, file_url = url;
      //处理poster封面图
      if(poster.buffer)//如果有封面图
      {
        var {id, url } = await inspirecloud.file.upload(
        poster.name,
        poster.buffer,
        {
          type: poster.type,
          region: 'cn-bytedance-internal'
        }
        );
      }
      else{
        var url = null;
        var id = null;
      }
      const poster_id = id, poster_url = url;
  
      //用户头像
      md5 = require('js-md5');
      hash = parseInt(md5(author),16) % 10;
      const fileTable = inspirecloud.db.table("_file");
      const usericon = await fileTable.where({name:"usericon"+String(hash)+".png"}).findOne();
  
  
  
  
      const videoTable = inspirecloud.db.table("VideoInfo");
      const newVideoItem = videoTable.create({
       author: author,
       description:description,
       likes:parseInt(likes),
       comments:parseInt(comments),
       shares:parseInt(shares),
       url:file_url,
       poster:poster_url,
       icon: usericon.url,
       bgm:bgm,
       file_id:ObjectId(file_id),
       poster_id:ObjectId(poster_id),
       tagList:tagList===""?[]:tagList.split(" ")
       });
     await videoTable.save(newVideoItem);
  
     return "success";
  
    }
    catch(error){
      context.status(404);
      return "create failed";
    }
  
  
  
  
  
  
  };