import React from 'react';
import './Uploader.less'
import {useDispatch} from "react-redux";
import {removeUploadFile} from "../../../reducers/uploadReducer";

const UploadFile = ({file: {id, name, progress}}) => {
    const dispatch = useDispatch();
    return (
        <div className="upload-file">
            <div className="upload-file__header">
                <div className="upload-file__name">{name}</div>
                <button className="upload-file__remove" onClick={() => dispatch(removeUploadFile(id))}>x</button>
            </div>
            <div className="upload-file__progress_bar">
                <div className="upload-file__upload_bar" style={{width: `${progress}%`}}></div>
                <div className="upload-file__percent">{progress}%</div>
            </div>
        </div>
    );
};

export default UploadFile;