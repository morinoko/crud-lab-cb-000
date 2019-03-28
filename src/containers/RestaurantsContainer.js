import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (name) => dispatch({type: 'ADD_RESTAURANT', name: name}),
  }
}

export default connect(null, mapDispatchToProps)(RestaurantsContainer);
