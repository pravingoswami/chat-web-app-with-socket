import React from 'react'

class Chat extends React.Component{
    
    constructor(){
        super()
        this.state = {
            username : '',
            message : '',
            messages : []
        }
    }

    handleFormData = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr/>
                                <div className="messages">
                                    {
                                        this.state.messages.map(message => <div>{message.author} : {message.message}</div>)
                                    }
                                </div>
                            </div>
                            <div className="card-footer">
                                    <input type="text" placeholder="Username" name = "username" value = {this.state.username} onChange = {this.handleFormData} className="form-control"/>
                                    <br/>
                                    <input type="text" placeholder="Message" name = "message" value = {this.state.message} onChange = {this.handleFormData} className="form-control"/>
                                    <br/>
                                    <button className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Chat