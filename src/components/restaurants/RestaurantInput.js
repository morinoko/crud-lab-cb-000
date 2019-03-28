import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: ''
    };
  }
  
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleOnSubmit = event => {
    event.preventDefault();
    
    this.props.addRestaurant(this.state.name);
    
    this.setState({
      name: ''
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
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
