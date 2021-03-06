import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios' 
import Restaurant from './Restaurant' 
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1{
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
` 
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    //get all restaurants from api & then update restaurants in state

    axios.get('/api/v1/restaurants.json')
    .then( resp => setRestaurants(resp.data.data))
    .catch( resp => console.log(resp))
  }, [restaurants.length])

  const grid = restaurants.map( item => {
    return (
      <Restaurant 
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>Restaurant Reviews</h1>
        <Subheader>Honest, unbiased restaurant reveiws</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Restaurants