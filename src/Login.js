import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super()

    }

    render() {
        return (
            <div>
                Username:<input type="text"></input><br />
                Password:<input type="password"></input>
            </div>
        )
    }

}

export default Login