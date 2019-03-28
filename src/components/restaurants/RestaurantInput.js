import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: ''
    };
  }
  
  handleNameChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  
  handleOnSubmit = event => {
    event.preventDefault();
    
    this.props.addRestaurant(this.state.text);
    
    this.setState({
      text: ''
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="name">Restaurant Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.text}
            onChange={this.handleNameChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
