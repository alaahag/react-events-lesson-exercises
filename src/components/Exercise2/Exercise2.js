import React, { Component } from 'react';
import Conversation from './Conversation';
import List from './List';

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  displayConvo = name => {
    // let tasks = [...this.state.tasks]
    // tasks.find(t => t.text === text).complete = true
    this.setState({displayConversation: name});
  }

  render() {
    return (
      <div >
        {
          /* If displayConverastion is null - 
          App should render List, otherwise it should display Conversation */
          this.state.displayConversation === null ? <List displayConvo={this.displayConvo} name={Array.from(this.state.conversations.map(m => m.with))} /> : <Conversation displayConvo={this.displayConvo} sender={this.state.displayConversation} convo={this.state.conversations.find(f => f.with === this.state.displayConversation)} />
        }
      </div>
    );
  }
}

export default Exercise2;
