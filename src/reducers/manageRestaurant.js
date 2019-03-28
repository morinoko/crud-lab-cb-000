
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {restaurants: [], reviews: []},
action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        name: action.name,
        id: cuid()
      };
      
      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      };
      
    case 'DELETE_RESTAURANT':
      const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      
      return {
        ...state,
        restaurants: filteredRestaurants
      }
      
    case 'ADD_REVIEW':
      return state;
      
    case 'REMOVE_REVIEW':
      return state;
      
    default:
      return state;
  }
}
