import React from "react";
import style from "./Header.module.scss"
import { Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const RoomHeader = (props) => {
    const { img,name,isOpen,photoIndex } = props;
    const { onClick,MovePrevRequest,MoveNextRequest } = props

    return(
        <div className={style.wrap}>
            <Link to={"/"}>
                <div className={style.home}>
                    <img src="/img/hero-logo_block.svg" alt="logo" />
                </div>
            </Link>
            <div className={ style.img }>
                <div className={ style.imgLeft }>
                    <img 
                        src={img[0]} 
                        alt="RoomImg01" 
                        onClick = {()=>onClick(true,0)}
                    />
                </div>
                <div className={ style.imgRight }>
                    <div className={style.ingRightTop}>
                        <img 
                            src={img[1]} 
                            alt="RoomImg02" 
                            onClick = {()=>onClick(true,1)}
                        />
                    </div>
                    <div className={style.ingRightBottom}>
                        <img 
                            src={img[2]} 
                            alt="RoomImg03" 
                            onClick = {()=>onClick(true,2)}
                        />
                    </div>
                </div>
            </div>
            {
                isOpen && (
                <Lightbox 
                    mainSrc = {img[photoIndex]}
                    nextSrc={img[(photoIndex + 1) % img.length]}
                    prevSrc={img[(photoIndex + img.length - 1) % img.length]}
                    onCloseRequest={()=>onClick(false)}
                    onMovePrevRequest={()=>{MovePrevRequest(photoIndex,img.length)}}
                    onMoveNextRequest={()=>{MoveNextRequest(photoIndex,img.length)}}
                    imageCaption={name}
                />
            )}
        </div>
    )
};

export default RoomHeader;