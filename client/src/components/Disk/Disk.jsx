import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/FileList";
import './Disk.less'
import Popup from "./Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer";
import Uploader from "./Uploader/Uploader";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false);

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files];
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(e){
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(true)
    }

    function dragLeaveHandler(e){
        e.preventDefault();
        e.stopPropagation();
        setDragEnter(false)
    }

    function dropHandler(e){
        e.preventDefault();
        e.stopPropagation();
        let files = [...e.dataTransfer.files];
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    return ( !dragEnter ?
        <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className="disk__btns">
                {currentDir && <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>}
                <button className="disk__create" onClick={() => dispatch(setPopupDisplay('flex'))}>Создать папку</button>
                <div className="upload">
                    <label htmlFor="upload-file" className="upload__label">Загрузить</label>
                    <input multiple={true} onChange={(e) => fileUploadHandler(e)} className="upload__input" id="upload-file" type="file"/>
                </div>
            </div>
            <FileList/>
            <Popup />
            <Uploader />
        </div>
        :
        <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
    );
};

export default Disk;
