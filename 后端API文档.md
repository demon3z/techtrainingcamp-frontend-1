## 0. 简介

所有API成功200 ，失败404

Base url: https://qck2s3.fn.thelarkcloud.com 

## 1. 点播相关

### 1.1 获取所有可点播视频

- 请求路径：/getVideoList
- 请求方法：GET
- 响应参数：

| 参数名      | 参数说明             | 备注                             |
| ----------- | -------------------- | -------------------------------- |
| _id         | 可点播视频的唯一标识 |                                  |
| author      | 作者名称             |                                  |
| description | 视频简介             |                                  |
| likes       | 点赞数               |                                  |
| comments    | 评论数               |                                  |
| shares      | 分享数               |                                  |
| url         | 视频链接             |                                  |
| poser       | 封面链接             | 如果没有封面，该字段为空字符串"" |
| bgm         | 背景音乐             |                                  |
| file_id     | 文件_id 外键         |                                  |
| poster_id   | 封面_id 外键         |                                  |
| tagList     | 标签                 |                                  |
| createdAt   | 创建时间             |                                  |
| updatedAt   | 更新时间             |                                  |
| icon        | 作者头像链接         |                                  |

- 响应数据举例：

```json
[ { _id: '602cbc35607b4e000a75786b',
    author: 'ceshi1',
    description: '无',
    likes: 0,
    comments: 0,
    shares: 0,
    url:
     'https://s1-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/874804c64c0a8047_1613544500836.mp4',
    poster:
     'https://s3-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/1bfcf4151317f265_1613544501171.png',
    bgm: '暂时无法识别',
    file_id: '602cbc35370b7b7c4b25b5ae',
    poster_id: '602cbc35370b7b7c4b25b5bd',
    tagList: [],
    createdAt: '2021-02-17T06:48:21.231Z',
    updatedAt: '2021-02-17T07:19:44.261Z',
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/f4e1cc4b9a30cad7_1613546080002.png' },
  { _id: '602cbc40607b4e000a75786c',
    author: 'ceshi1',
    description: '无',
    likes: 0,
    comments: 0,
    shares: 0,
    url:
     'https://s6-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/36b9b1b39fe54167_1613544511584.mp4',
    poster:
     'https://s6-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/6216c8ba1e77f5b5_1613544511915.png',
    bgm: '暂时无法识别',
    file_id: '602cbc3f370b7b7c4b25b6aa',
    poster_id: '602cbc3f370b7b7c4b25b6b9',
    tagList: [],
    createdAt: '2021-02-17T06:48:32.004Z',
    updatedAt: '2021-02-17T08:31:30.267Z',
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/f4e1cc4b9a30cad7_1613546080002.png' },
  { _id: '602cbd10607b4e000a75786e',
    author: 'ceshi1',
    description: '无',
    likes: 0,
    comments: 0,
    shares: 0,
    url:
     'https://s3-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/326e418ea9791572_1613544720712.mp4',
    poster: null,
    bgm: '暂时无法识别',
    file_id: '602cbd10370b7b7c4b25c84a',
    poster_id: '602cbd10607b4e000a75786d',
    tagList: [],
    createdAt: '2021-02-17T06:52:00.900Z',
    updatedAt: '2021-02-17T08:31:28.062Z',
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/f4e1cc4b9a30cad7_1613546080002.png' },
  { _id: '602cbdbd607b4e000a757870',
    author: '西瓜君',
    description: '西瓜视频100周年',
    likes: 1,
    comments: 2,
    shares: 3,
    url:
     'https://s3-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/d9000b6c7f7d4af0_1613544892997.mp4',
    poster: null,
    bgm: '西瓜music - 西瓜歌手',
    file_id: '602cbdbd370b7b7c4b25d795',
    poster_id: '602cbdbd607b4e000a75786f',
    tagList: [ 'test1', 'test2' ],
    createdAt: '2021-02-17T06:54:53.294Z',
    updatedAt: '2021-02-17T08:38:38.370Z',
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/b6355ef7f66b616e_1613546113902.png' },
  { _id: '602cd66e2a150a000aa1d9d2',
    author: 'ceshi2',
    description: '西瓜视频101周年',
    likes: 66,
    comments: 0,
    shares: 0,
    url:
     'https://s1-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/a98987e19e534fb0_1613551214194.mp4',
    poster: null,
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/b6355ef7f66b616e_1613546113902.png',
    bgm: '西瓜music - 西瓜歌手',
    file_id: '602cd66e370b7b7c4b27eaa5',
    poster_id: '602cd66e2a150a000aa1d9d1',
    tagList: [ 'test1', 'test2' ],
    createdAt: '2021-02-17T08:40:14.514Z',
    updatedAt: '2021-02-17T08:40:14.514Z' } ]
```

### 1.2 创建点播视频

- 请求路径：/createVideo
- 请求方法：POST
- 请求参数：

| 参数名      | 参数说明 | 备注                               |
| ----------- | -------- | ---------------------------------- |
| author      | 作者名称 | 字符串，可以为空，默认为"匿名用户" |
| description | 视频简介 | 字符串，默认为"无"                 |
| likes       | 点赞数   | 整数，默认为0                      |
| comments    | 评论数   | 整数，默认为0                      |
| shares      | 分享数   | 整数，默认为0                      |
| bgm         | 背景音乐 | 字符串，默认为"暂时无法识别"       |
| tagList     | 标签     | 用空格分割的字符串，默认为[]       |
| myFile      | 视频文件 | 通过form-data上传，必填            |
| poster      | 封面文件 | 选填，如果没有则用视频首帧作为封面 |

- 请求参数举例

```json
{
  author:"new",
  description:"new",
  likes:0,
  comments:0,
  shares:0,
  tagList:"tag1 tag2 tag3",
  bgm:"music - 歌手",
  myFile:form-data,
  poster:form-data,
}
```

- 响应数据举例：

```json
"success"
```

### 1.3 删除点播视频

- 请求路径：/deleteVideo
- 请求方法：POST
- 请求参数：

| 参数名 | 参数说明         | 备注     |
| ------ | ---------------- | -------- |
| id     | 即将删除的视频id | 不能为空 |

- 请求参数举例

```json
{
  id:"602cbc35607b4e000a75786b"
}
```

- 响应参数：

| 参数名  | 参数说明             | 备注                             |
| ------- | -------------------- | -------------------------------- |
| result1 | 是否成功删除文件     |                                  |
| result2 | 是否成功删除视频信息 |                                  |
| result3 | 是否成功删除封面图   | 如果该视频没有封面，则没有该字段 |

- 响应数据举例：

```json
{ 
  result1: { deletedCount: 1 }, 
 	result2: { deletedCount: 1 } 
}
```

### 1.4 更新点播视频

- 请求路径：/updateVideo
- 请求方法：POST
- 请求参数：

| 参数名      | 参数说明       | 备注                               |
| ----------- | -------------- | ---------------------------------- |
| id          | 要修改的视频id | 必填                               |
| author      | 更新作者名称   | 字符串，如果为空则不修改           |
| description | 更新视频介绍   | 字符串，如果为空则不修改           |
| likes       | 修改点赞数     | 整数，如果为空则不修改             |
| comments    | 修改评论数     | 整数，如果为空则不修改             |
| shares      | 修改分享数     | 整数，如果为空则不修改             |
| tagList     | 修改视频标签   | 空格分割的字符串，如果为空则不修改 |
| bgm         | 修改背景音乐   | 字符串，如果为空则不修改           |

- 请求参数举例

```json
{
  id:"602cbc35607b4e000a75786b",
  author:"new",
  description:"new",
  likes:0,
  comments:0,
  shares:0,
  tagList:"tag1 tag2 tag3",
  bgm:"music - 歌手"
}
```

- 响应参数：

| 参数名      | 参数说明             | 备注                             |
| ----------- | -------------------- | -------------------------------- |
| _id         | 可点播视频的唯一标识 |                                  |
| author      | 作者名称             |                                  |
| description | 视频简介             |                                  |
| likes       | 点赞数               |                                  |
| comments    | 评论数               |                                  |
| shares      | 分享数               |                                  |
| url         | 视频链接             |                                  |
| poser       | 封面链接             | 如果没有封面，该字段为空字符串"" |
| bgm         | 背景音乐             |                                  |
| file_id     | 文件_id 外键         |                                  |
| poster_id   | 封面_id 外键         |                                  |
| tagList     | 标签                 |                                  |
| createdAt   | 创建时间             |                                  |
| updatedAt   | 更新时间             |                                  |
| icon        | 作者头像链接         |                                  |

- 响应数据举例：

```json
{ _id: '602cd66e2a150a000aa1d9d2',
  author: '66',
  description: '西瓜视频101周年',
  likes: 10099,
  comments: 0,
  shares: 0,
  url:
   'https://s1-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/a98987e19e534fb0_1613551214194.mp4',
  poster: null,
  icon:
   'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/b6355ef7f66b616e_1613546113902.png',
  bgm: 'music - 群星',
  file_id: '602cd66e370b7b7c4b27eaa5',
  poster_id: '602cd66e2a150a000aa1d9d1',
  tagList: [ 'test1', 'test2' ],
  createdAt: '2021-02-17T08:40:14.514Z',
  updatedAt: '2021-02-17T08:58:52.117Z' }
```

### 1.5 点赞视频

- 请求路径：/likeVideo
- 请求方法：POST
- 请求参数：

| 参数名 | 参数说明       | 备注                        |
| ------ | -------------- | --------------------------- |
| id     | 要点赞的视频id | 必填                        |
| isLike | 点赞/取消点赞  | true为点赞，false为取消点赞 |

- 请求参数举例

```json
{
  id:"602cd66e2a150a000aa1d9d2",
  isLike:true
}
```

- 响应参数：

| 参数名      | 参数说明              | 备注                             |
| ----------- | --------------------- | -------------------------------- |
| _id         | 可点播视频的唯一标识  |                                  |
| author      | 作者名称              |                                  |
| description | 视频简介              |                                  |
| likes       | 点赞/取消点赞后的数量 |                                  |
| comments    | 评论数                |                                  |
| shares      | 分享数                |                                  |
| url         | 视频链接              |                                  |
| poser       | 封面链接              | 如果没有封面，该字段为空字符串"" |
| bgm         | 背景音乐              |                                  |
| file_id     | 文件_id 外键          |                                  |
| poster_id   | 封面_id 外键          |                                  |
| tagList     | 标签                  |                                  |
| createdAt   | 创建时间              |                                  |
| updatedAt   | 更新时间              |                                  |
| icon        | 作者头像链接          |                                  |

- 响应数据举例：

```json
{ _id: '6034d6659fdc6c000aa1f9e6',
  author: '动画',
  description: '小狗钓鱼',
  likes: 21,
  comments: 22,
  shares: 22,
  url:
   'https://s6-lc.thelarkcloud.com/obj/larkcloud-mgcloud/baas/qck2s3/bc49f0b17bc72b40_1614075493238.mp4',
  poster: null,
  icon:
   'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/30eb844134d61c12_1613546104471.png',
  bgm: '暂时无法识别',
  file_id: '6034d665370b7b7c4be62e87',
  poster_id: '6034d6659fdc6c000aa1f9e5',
  tagList: [ '禁止钓鱼' ],
  createdAt: '2021-02-23T10:18:13.708Z',
  updatedAt: '2021-02-23T11:25:39.484Z' }
```

## 2. 直播相关

### 2.1 获取可用直播源

- 请求路径：/getLiveList
- 请求方法：GET
- 响应参数：

| 参数名      | 参数说明                 | 备注 |
| ----------- | ------------------------ | ---- |
| _id         | 直播源唯一标识，直播源id |      |
| author      | 主播名称                 |      |
| description | 直播简介                 |      |
| url         | 直播源                   |      |
| icon        | 主播头像                 |      |
| views       | 累计观看次数             |      |
| createdAt   | 直播创建时间             |      |
| updatedAt   | 直播信息更改时间         |      |

- 响应数据举例：

```json
[ { _id: '602cc4249ff01400e7af0e44',
    author: '123',
    description: 'ss',
    url:
     '//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/872b86060d081c06_1613546121382.png',
    views: 111,
    createdAt: '2021-02-17T07:22:12.266Z',
    updatedAt: '2021-02-17T07:22:34.756Z' },
  { _id: '602cc4f07413ab01f95f91a8',
    author: '西瓜视频',
    description: '测试流',
    url:
     '//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
    icon:
     'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/b6355ef7f66b616e_1613546113902.png',
    views: 111,
    createdAt: '2021-02-17T07:25:36.855Z',
    updatedAt: '2021-02-17T07:25:36.855Z' } ]
```

### 2.2 创建直播源

- 请求路径：/createLive
- 请求方法：POST
- 请求参数：

| 参数名      | 参数说明     | 备注                       |
| ----------- | ------------ | -------------------------- |
| author      | 主播名称     | 可以为空，默认为"匿名用户" |
| description | 直播间简介   | 可以为空，默认为"无"       |
| url         | 直播源hls    | 必填                       |
| views       | 累计观看次数 | 可以为空，默认为0          |

- 请求参数举例

```json
{
"author":"123",
"description":"ss",
"url":"//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
"views":0
}
```

- 响应数据举例：

```json
"success"
```

### 2.3 删除直播源

- 请求路径：/deleteLive
- 请求方法：POST
- 请求参数：

| 参数名 | 参数说明         | 备注 |
| ------ | ---------------- | ---- |
| id     | 要删除的直播源id | 必填 |

- 请求参数举例

```json
{
  id:"602cc4f07413ab01f95f91a8"
}
```

- 响应参数：

| 参数名 | 参数说明 | 备注 |
| ------ | -------- | ---- |
| result | 删除结果 |      |

- 响应数据举例：

```json
{ result: { deletedCount: 1 } }
```

### 2.4 更新直播源信息

- 请求路径：/updateLive
- 请求方法：POST
- 请求参数：

| 参数名      | 参数说明               | 备注                 |
| ----------- | ---------------------- | -------------------- |
| id          | 要修改的直播源id       | 必填                 |
| author      | 修改主播名称           | 如果为空，则不修改   |
| description | 修改直播间简介         | 如果为空，则不修改   |
| views       | 修改直播间累计观看次数 | 可以为空，默认不修改 |

- 请求参数举例

```json
{
  "id": "602928b75432d101873713b3",
  "author":"up",
  "description":"up",
  "views":99
}
```

- 响应参数：

| 参数名      | 参数说明                 | 备注 |
| ----------- | ------------------------ | ---- |
| _id         | 直播源唯一标识，直播源id |      |
| author      | 主播名称                 |      |
| description | 直播简介                 |      |
| url         | 直播源                   |      |
| icon        | 主播头像                 |      |
| views       | 累计观看次数             |      |
| createdAt   | 直播创建时间             |      |
| updatedAt   | 直播信息更改时间         |      |

- 响应数据举例：

```json
{ _id: '602cc4249ff01400e7af0e44',
  author: 'up',
  description: 'up',
  url:
   '//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
  icon:
   'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/872b86060d081c06_1613546121382.png',
  views: 99,
  createdAt: '2021-02-17T07:22:12.266Z',
  updatedAt: '2021-02-23T09:23:43.920Z' }
```

### 2.5 直播累计观看人数统计

- 请求路径：/watchLiveCounter
- 请求方法：POST
- 请求参数：

| 参数名 | 参数说明 | 备注 |
| ------ | -------- | ---- |
| id     | 直播源id | 必填 |

- 请求参数举例

```json
{
  "live_id":"602cc4f07413ab01f95f91a8"
}
```

- 响应参数：

| 参数名      | 参数说明                 | 备注 |
| ----------- | ------------------------ | ---- |
| _id         | 直播源唯一标识，直播源id |      |
| author      | 主播名称                 |      |
| description | 直播简介                 |      |
| url         | 直播源                   |      |
| icon        | 主播头像                 |      |
| views       | 更新后的累计观看次数     |      |
| createdAt   | 直播创建时间             |      |
| updatedAt   | 直播信息更改时间         |      |

- 响应数据举例：

```json
{ _id: '602cc4f07413ab01f95f91a8',
  author: '西瓜视频',
  description: '测试流',
  url:
   '//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
  icon:
   'https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qck2s3/b6355ef7f66b616e_1613546113902.png',
  views: 112,
  createdAt: '2021-02-17T07:25:36.855Z',
  updatedAt: '2021-02-23T11:27:47.221Z' }
```

### 

## 3. 评论相关

### 3.1 获取某直播源下的评论

- 请求路径：/getComment
- 请求方法：POST
- 请求参数：

| 参数名    | 参数说明                                 | 备注                                                         |
| --------- | ---------------------------------------- | ------------------------------------------------------------ |
| live_id   | 直播源id                                 | 必填                                                         |
| time      | 返回这个时间之后的所有新评论，unix时间戳 | 如果selectAll为true则为空；如果selectAll为false，则必填      |
| selectAll | 是否返回所有评论                         | true/false，如果为true返回某直播间的所有历史评论，如果为false，返回time之后的所有新评论 |

- 请求参数举例

```json
{
  "live_id":"602cc4f07413ab01f95f91a8",
  "time":1614058436000,
  "selectAll":false
}
```

- 响应参数：

| 参数名  | 参数说明           | 备注 |
| ------- | ------------------ | ---- |
| _id     | 评论id，唯一标识符 |      |
| author  | 评论作者           |      |
| content | 评论内容           |      |
| t       | 评论创建的时间戳   |      |

- 响应数据举例：

```json
[ { _id: '6034cb1b805e3500b26d8e4f',
    author: 'user1',
    content: 'test comment',
    t: 1614072603000 },
  { _id: '6034cb1f4c14dc00e9fa83df',
    author: 'user1',
    content: 'test comment',
    t: 1614072607000 },
  { _id: '6034cb2361d04f0121463496',
    author: 'user1',
    content: 'test comment',
    t: 1614072611000 } ]
```

### 3.2 新建评论

- 请求路径：/createComment
- 请求方法：POST
- 请求参数：

| 参数名  | 参数说明         | 备注                         |
| ------- | ---------------- | ---------------------------- |
| live_id | 直播间唯一标识符 | 必填，必须是已经存在的直播间 |
| author  | 评论者名称       | 可以为空，默认为"匿名用户"   |
| content | 评论内容         | 必填                         |

- 请求参数举例

```json
{
  "live_id":"602cc4f07413ab01f95f91a8",
  "author":"user1",
  "content":"test comment"
}
```

- 响应数据举例：

```json
"success"
```

### 3.3 更新评论

- 请求路径：/updateComment
- 请求方法：POST
- 请求参数：

| 参数名  | 参数说明         | 备注               |
| ------- | ---------------- | ------------------ |
| id      | 评论id           | 必填               |
| author  | 修改评论作者名称 | 如果为空，则不修改 |
| content | 修改评论内容     | 如果为空，则不修改 |

- 请求参数举例

```json
{
  "id":"60349fd4a6d15b0079645331",
  "author":"newauthor",
  "content":"new content"
}
```

- 响应参数：

| 参数名    | 参数说明         | 备注 |
| --------- | ---------------- | ---- |
| _id       | 评论唯一标识符   |      |
| author    | 修改后的评论作者 |      |
| content   | 修改后的评论内容 |      |
| live_id   | 直播间id         |      |
| createdAt | 评论创建时间     |      |
| updatedAt | 评论修改时间     |      |

- 响应数据举例：

```json
{ _id: '60349fd4a6d15b0079645331',
  author: 'newauthor',
  content: 'new content',
  live_id: '602cc4f07413ab01f95f91a8',
  createdAt: '2021-02-23T06:25:24.648Z',
  updatedAt: '2021-02-23T06:26:14.849Z' }
```

### 3.4 删除某一条评论

- 请求路径：/deleteComment
- 请求方法：POST
- 请求参数：

| 参数名 | 参数说明       | 备注 |
| ------ | -------------- | ---- |
| id     | 评论唯一标识符 | 必填 |

- 请求参数举例

```json
{
  "id":"603493d4f385ec00ea8c8785"
}
```

- 响应参数：

| 参数名 | 参数说明     | 备注 |
| ------ | ------------ | ---- |
| result | 删除是否成功 |      |

- 响应数据举例：

```json
{ result: { deletedCount: 1 } }
```

### 3.5 删除某直播相关的所有评论

- 请求路径：/deleteAllComment
- 请求方法：POST
- 请求参数：

| 参数名  | 参数说明                       | 备注 |
| ------- | ------------------------------ | ---- |
| live_id | 要删除这个直播间相关的所有评论 |      |

- 请求参数举例

```json
{
 "live_id":"602cc4f07413ab01f95f91a8"
}
```

- 响应参数：

| 参数名 | 参数说明           | 备注 |
| ------ | ------------------ | ---- |
| result | 成功删除的评论数量 |      |

- 响应数据举例：

```json
{ result: { deletedCount: 4 } } 
```