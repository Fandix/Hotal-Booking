import React from "react";
import { connect } from "react-redux"
import { SingleRoomRequestPost,FetchSingleRoomData } from "../../Redux/Action"
import "../../Presentational Components/DetalPage/reset.css"

import RoomDetail from "../../Presentational Components/DetalPage/App"
import Loading from "../../Presentational Components/MainPage/Loading/Loading"
class RoomInof extends React.Component
{
    state = {
        Room : {},
        isFetch : true,
    }

    componentDidMount(){
        this.props.dispatch(SingleRoomRequestPost());
        this.props.dispatch(FetchSingleRoomData(this.props.location.state.roomID));
    }

    componentDidUpdate(prevProps){
        if(this.props.isFetch !== prevProps.isFetch){
            this.setState({
                isFetch : this.props.isFetch
            })
        }

        if(this.props.fetchFail !== prevProps.fetchFail || this.props.fetchFail === true){
            if(this.props.fetchFail === true){
                this.props.dispatch(FetchSingleRoomData(this.props.location.state.roomID));
            }
        }

        if(this.props.Room !== prevProps.Room){
            this.setState({
                Room : this.props.Room,
            })
        }
    };

    render()
    {
        return(
            <div>
                {
                    this.state.isFetch === true?<Loading /> 
                    :<RoomDetail
                        Room = {this.state.Room}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return{
        Room : state.FetchSingleDataReducers.RoomData.room,
        isFetch : state.FetchSingleDataReducers.isFetch,
        fetchFail : state.FetchSingleDataReducers.fetchFail
    }
};

export default connect(
    mapStateToProps
)(RoomInof);