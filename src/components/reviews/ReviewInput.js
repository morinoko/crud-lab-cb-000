import React, { Component } from 'react';

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
    
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
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
    );
  }
};

export default ReviewInput;
