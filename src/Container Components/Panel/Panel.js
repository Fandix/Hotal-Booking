import React from "react";
import { render } from "react-dom";
import style from "./Panel.module.scss"

class Panel extends React.Component{
    state = {
        active:false,
        component:null,
        callback:() =>{}
    }

    close = () => {
        this.setState({
            active:false
        })
    }

    open = (options={
        callback : () => {}
    }) => {
        const {callback} = options;
        this.setState({
            active:true,
            callback:callback
        })
    }

    render(){
        const _className = {
            true:style.active,
            false:style.nonactive
        }

        return(
            <div className={_className[this.state.active]}>
                <div className={style.overLayer} onClick={() => {this.close()}}></div>
                <div className={style.panel}>
                    <div className={style.box}>
                        <div className={style.close} onClick={this.close}>X</div>
                        <div className={style.title}>
                            <h1>Welcome to White Space</h1>
                        </div>
                        <div className={style.separate}>
                            <span className={style.lineBreak}></span>
                            <span className={style.lineBreak}></span>
                            <span className={style.lineBreak}></span>
                        </div>
                        <div className={style.content}>
                            <p>Thank you for booking with White Space, your room was booked successfully!</p>
                        </div>
                        <div className={style.success}>
                            <img src="/img/success.svg" alt="Success"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const _div = document.createElement("div");
document.body.appendChild(_div);

const _panel = render(<Panel /> , _div);
export default _panel;

