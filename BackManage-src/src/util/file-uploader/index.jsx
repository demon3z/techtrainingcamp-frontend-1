/*
 * @Author: SunXiaochun 
 * @Date: 2021-02-23 16:11:50 
 * @Last Modified by:   SunXiaochun 
 * @Last Modified time: 2021-02-23 16:11:50 
 */

import React        from 'react';
import FileUpload   from './react-fileupload.jsx';

class FileUploader extends React.Component{
    render(){
        const options={
            baseUrl         :'/manage/product/upload.do',
            fileFieldName   : 'upload_file',
            dataType        : 'json',
            chooseAndUpload : true,
            uploadSuccess   : (res) => {
                this.props.onSuccess(res.data);
            },
            uploadError     : (err) => {
                this.props.onError(err.message || '上传图片出错啦');
            }
        }
        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">请选择图片</button>
            </FileUpload>
        )           
    }
}
export default FileUploader;