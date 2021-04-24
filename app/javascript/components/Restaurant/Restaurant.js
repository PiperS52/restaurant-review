import axios from 'axios'
import React, { useState, useEffect } from 'react' 
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff
  height: 100vh;
  overflow: scroll;
  
  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  left-padding: 50px;
`

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/restaurants/${slug}`

    axios.get(url)
    .then( resp => {
      setRestaurant(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp))
    
    //api/v1/restaurants/dominos-pizza
    //restaurants/dominos-pizza
  }, [])

  return (
    <Wrapper>This is the Restaurants#show view for the app
      <Column>
        <Main>
          { loaded &&
            <Header
              attributes={restaurant.data.attributes}
              reviews={restaurant.included}
            />
          }
        </Main>
        <div className="reviews"></div>
      </Column>
      <Column>
        <div className="review-form">[Review form goes here]</div>
      </Column>

    </Wrapper>
  )
}

export default Restaurant