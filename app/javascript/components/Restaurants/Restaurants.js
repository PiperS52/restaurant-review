import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios' 

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    //get all restaurants from api & then update restaurants in state

    axios.get('/api/v1/restaurants.json')
    .then( resp => {
      setRestaurants(resp.data.data)
    })
    .catch( resp => console.log(resp))
  }, [restaurants.length])

  const list = restaurants.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return (
    <Fragment>
      <div>This is the Restaurants#index view for the app</div>
      <ul>{list}</ul>
    </Fragment>
  )
}

export default Restaurants