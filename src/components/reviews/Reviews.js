import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    
    const associatedReviews = reviews.filter(review =>  review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review) => {
      return (
        <Review key={review.id} review={review} deleteReview={deleteReview} />
      );
    });

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;