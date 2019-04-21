import React, { Component } from 'react';
import Message from './../../atoms/Message';

class Card extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        window.setInterval( () => {
            this.setState({
                date: new Date()
            })
            console.log (new Date())
        }, 1000)
    }

    render() {
        return (
            <div>
                <Message date={this.state.date}/>
                <Message>
                    {`today date : ${this.state.date}`}
                </Message>
                <Message date={`second date : ${this.state.date}`}/>
            </div>
        )
    }
}

export default Card;