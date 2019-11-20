import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import Rating from './components/rating'
import {restaurants} from './fixtures'
import Restaurants from './components/restaurants'

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
)
