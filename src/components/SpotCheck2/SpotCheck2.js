import React, { Component } from 'react';

export const Home = function () {
  // Should return some JSX with a div that has a class "home" and the text "Welcome to our page"
  return <div>Welcome to our page</div>
}

export const About = function () {
  // Should return some JSX with a div that has a class "about" and the text "It's great here"
  return <div>It is great here</div>
}

export class SpotCheck2 extends Component {

  // Your SpotCheck2 should render the Home Component, the About Component, and a Toggle Button
  // Either the Home or About component should be rendered when you press the toggle button
  // You should have a state with the property "showHome", with a value of true or false
  // You must use state and setState, to change the value of showHome
  //we always define state in the constructor
  constructor() {
    super()
    this.state = {
      showHome: true
    }
  }

  toggle = () => {
    this.setState({
      //here we're "flipping" the boolean of whatever is currently in state
      showHome: !this.state.showHome
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.showHome ? <Home /> : <About />}
      </div>
    );
  }
}


