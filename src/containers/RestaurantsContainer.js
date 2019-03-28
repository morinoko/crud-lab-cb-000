import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (name) => dispatch({type: 'ADD_RESTAURANT', name: name}),
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id: id})
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
