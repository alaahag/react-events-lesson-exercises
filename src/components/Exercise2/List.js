import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  // displayConvo = () => {
  //   this.props.displayConvo(this.props.name)
  // }
  render() {
    return (
      <div>
        {
          /* Should render an array of Contact components , with the prop "name"*/
          
          this.props.name.map(m => <Contact key={m} displayConvo={this.props.displayConvo} name={m} />)
        }
      </div>
    );
  }
}

export default List;
