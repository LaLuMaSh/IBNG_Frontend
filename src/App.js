import React from 'react'
import './App.css'
import ls from 'local-storage'
import Login from './Login'



class App extends React.Component {
    //API laden
    //Login checken

    constructor(props) {
        super()

    }

    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }

}


export default App;
