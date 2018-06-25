import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Message from './Message.js';

class Chatroom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            chats : [{
                username : 'Daniel Pimentel',
                content : 'Sup Dawgs',
                img : 'http://i.imgur.com/Tj5DGiO.jpg',
            }, 
            {
                username : 'Daniel Pimentel',
                content : 'Sup Dawgs',
                img : 'http://i.imgur.com/Tj5DGiO.jpg',

            },
            {
                username : 'Daniel Pimentel',
                content : 'Sup Dawgs',
                img : 'http://i.imgur.com/Tj5DGiO.jpg',
            },
        ]
    };
    this.submitMessage = this.submitMessage.bind(this);
        
        
        
        }
        componentDidMount(){
            this.scrollToBot();
        }

        componentDidUpdate(){
            this.scrollToBot();
        }

    scrollToBot(){
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;

    }
    submitMessage(e){
        e.preventDefault();
        this.setState({


            
        })
    }








    }

