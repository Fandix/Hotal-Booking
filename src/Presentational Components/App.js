import React from "react"
import Header from "./Header/Header"
import RoomCards from "./RoomCards/RoomCards"

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Header />
                <RoomCards RoomsData = {this.props.roomsData}/>
            </div>
        )
    }
}

export default App;