import React from "react";
import { connect } from "react-redux";
import { RequestPost,FetchRoomsData } from "../Redux/Action";

import App from "../Presentational Components/App";
import Loading from "../Presentational Components/Loading/Loading";

class RoomsData extends React.Component
{
    state = {
        RoomsData : [],
        isFetch : false,
    }

    componentDidMount(){
        this.props.dispatch(RequestPost());
        this.props.dispatch(FetchRoomsData());
    }

    componentDidUpdate(prevProps){
        if(this.props.isFetch !== prevProps.isFetch){
            this.setState({
                isFetch : this.props.isFetch
            })
        }

        if(this.props.Rooms !== prevProps.Rooms){
            this.setState({
                RoomsData : this.props.Rooms,
            })
        }

        if(this.props.fetchFail !== prevProps.fetchFail || this.props.fetchFail === true){
            if(this.props.fetchFail === true){
                this.props.dispatch(FetchRoomsData());
            }
        }
    }

    render()
    {
        return(
            <div>
                {
                    this.state.isFetch === true || this.props.fetchFail === true ?<Loading /> 
                    :<App
                        roomsData = {this.state.RoomsData}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return{
        Rooms : state.FetchDataReducers.RoomDatas.items,
        isFetch : state.FetchDataReducers.isFetch,
        fetchFail : state.FetchDataReducers.fetchFail
    }
}

export default connect(
    mapStateToProps
)(RoomsData);