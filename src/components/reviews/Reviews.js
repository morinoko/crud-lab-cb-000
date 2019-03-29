import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview } = this.props;
    
    const reviewList = reviews.map(review => {
      return (
        <Review
          key={review.id}
          review={review}
          deleteReview={deleteReview} 
        />
      )
    })
    
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;