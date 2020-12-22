import React, { Component } from 'react';

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }

  render() {
    return (
      <div>
        {
          /* should render a "name" recieved in props */
          <p onClick={this.displayConvo}>{this.props.name}</p>
          /* Should also reieve the displayConvo prop, and call the function onClick */
        }
      </div>
    );
  }
}

export default Contact;
