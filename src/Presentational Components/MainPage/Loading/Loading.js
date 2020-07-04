import React from "react";
import style from "./Loading.module.scss";
import "./loading.css"

class Loading extends React.Component{
    render(){
        return(
            <div className={style.wrap}>
                <img src="/img/hero-logo_white.svg" alt="logo" />
                <div className={style.loading}>
                    <div className="sk-three-bounce">
                        <div className="sk-child sk-bounce1"></div>
                        <div className="sk-child sk-bounce2"></div>
                        <div className="sk-child sk-bounce3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;