import React from "react";
import {render} from "react-dom";
import style from "./Panel.module.scss";

class Panel extends React.Component
{
    state = {
        active:false,
        callback:() => {}
    }

    //==========================================

    close = () => {
        this.setState({
            active:false
        })
    };

    //==========================================

    open = (options = { 
        props : [],
        component : null,
        callback : () => {} 
    }) => {
        const {props,component,callback} = options;
        const _key = new Date().getTime();
        const _component = React.createElement(component , {...props ,close:this.close , key:_key})
        this.setState({
            active:true,
            component:_component,
            callback:callback
        })
    }

    //==========================================

    render()
    {
        console.log(this.state.component)
        const _class = {
            true : style.active,
            false: style.nonactive
        }

        return(
            <div className={ _class[this.state.active] }>
                <div className={style.overLayer} onClick={this.close}></div>
                <div className={style.panel}>
                    {this.state.component}
                </div>
            </div>
        )
    }
}

const _div = document.createElement("div");
document.body.appendChild(_div);

const _panel = render(<Panel /> , _div);
export default _panel;

