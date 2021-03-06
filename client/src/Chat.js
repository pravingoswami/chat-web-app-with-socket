import React from 'react'
import io from 'socket.io-client'

class Chat extends React.Component{
    
    constructor(){
        super()
        this.state = {
            username : '',
            message : '',
            messages : []
        }

        this.socket = io('localhost:3001')

        this.socket.on('receive_message', function(data){
            addMessage(data)
        })

        const addMessage = data => {
            console.log(data)
            this.setState({messages : [...this.state.messages, data]})
            console.log(this.state.messages)
        }
    }

    handleFormData = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('hi')
        this.socket.emit('send_message', {
            author : this.state.username,
            message : this.state.message
        })
        this.setState({message : ''})
    }

    render(){
        return(
            <div>
              <div className="container">{console.log(this.state)}
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
                                    <button onClick = {this.handleSubmit} className="btn btn-primary form-control">Send</button>
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