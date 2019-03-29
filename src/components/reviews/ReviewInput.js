import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: ''
    }  
  }
  
  handleContentChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id});
    
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="content">Review content:</label>
          <input
            type="text"
            name="content"
            value={this.state.text}
            onChange={this.handleContentChange}
          />
          <input type="submit" />
        </form>
      </div>

      </div>
    );
  }
};

export default ReviewInput;
