import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import RoomsData from "./Container Components/MainPage/FetchRoomsData"
import RoomInof from "./Container Components/DetalPage/RoomInfo"

const Routes = withRouter(({ location }) => {
    return (
        <Switch>
            <Route path="/" exact component={RoomsData} />
            <Route path="/room/:roomId" exact component={RoomInof} />
        </Switch>
    )
});

const Router = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
};

export default Router;