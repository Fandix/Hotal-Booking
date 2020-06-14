import React from "react";
import style from "./Header.module.scss";
import { AiOutlineInstagram,AiFillFacebook,AiFillPhone,AiFillMail,AiFillHome } from "react-icons/ai";

const Header = (props) => {
    const RoomsData = props.RoomsData;
    const slideImages = [
        'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=70',
        'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=70',
        'https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=70',
    ];

    console.log(slideImages)

    let i = 0;
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <div className={style.logo}>
                    <img src="/img/hero-logo_white.svg" alt="logo" />
                </div>
                <div className={style.social}>
                    <div className={style.app}>
                        <div className={style.applogo}>
                            <AiOutlineInstagram />
                            <AiFillFacebook />
                        </div> 
                    </div>
                    <div className={style.detail}>
                        <div className={style.Content}>
                            <div className={style.phone}>
                                <AiFillPhone />
                                <p>02-17264937</p>
                            </div>
                            <div className={style.mail}>
                                <AiFillMail />
                                <p>whitespace@whiltespace.com.tw</p>
                            </div>
                            <div className={style.address}>
                                <AiFillHome />
                                <p>Talblick 268, Siegen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        {/************************* Slides *************************/}
            <div className={style.slides}>
                {
                    slideImages.map(res => (
                        <div
                            key = {i++}
                            style = {{
                                background:`url(${res})`,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className = {style.slide}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Header;