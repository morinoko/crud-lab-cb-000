
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {restaurants: [], reviews: []},
action) {
  
  let filteredReviews;
  
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        text: action.text,
        id: cuid()
      };
      
      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      };
      
    case 'DELETE_RESTAURANT':
      const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      filteredReviews = state.reviews.filter(review => review.restaurantId !== action.id);
      
      return {
        restaurants: filteredRestaurants,
        reviews: filteredReviews
      };
      
    case 'ADD_REVIEW':
      const newReview = {
        text: action.text,
        restaurantId: action.restaurantId,
        id: cuid()
      };
      
      return {
        ...state,
        reviews: [...state.reviews, newReview]
      };
      
    case 'DELETE_REVIEW':
      filteredReviews = state.reviews.filter(review => review.id !== action.id);
      
      return {
        ...state,
        reviews: filteredReviews
      };
      
    default:
      return state;
  }
}
