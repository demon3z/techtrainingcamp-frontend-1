后端代码部署在轻服务上 **https://qingfuwu.cn/**，云函数名即文件名。

轻服务项目名： Tiktok demo backend

## 数据库

数据库建表，VideoInfo, LiveInfo, Comment

### VideoInfo

| 字段        | 类型     |
| ----------- | -------- |
| author      | String   |
| url         | String   |
| description | String   |
| likes       | Number   |
| comments    | Number   |
| shares      | Number   |
| tagList     | Array    |
| bgm         | String   |
| poster_id   | ObjectId |
| poster      | String   |
| icon        | String   |
| _id         | ObjectId |
| createdAt   | Date     |
| updatedAt   | Date     |

### LiveInfo

| 字段        | 类型     |
| ----------- | -------- |
| author      | String   |
| description | String   |
| url         | String   |
| views       | Number   |
| icon        | String   |
| _id         | ObjectId |
| createdAt   | Date     |
| updatedAt   | Date     |

### Comment

| 字段      | 类型     |
| --------- | -------- |
| author    | String   |
| content   | String   |
| live_id   | ObjectId |
| _id       | ObjectId |
| createdAt | Date     |
| updatedAt | Date     |

