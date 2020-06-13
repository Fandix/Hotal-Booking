import React from "react"
import Header from "./Header/Header"

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Header RoomsData = {this.props.roomsData}/>
            </div>
        )
    }
}

export default App;