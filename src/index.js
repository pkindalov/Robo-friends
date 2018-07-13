import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import CardList from './CardList'
import App from './containers/App'
import 'tachyons'
import registerServiceWorker from './registerServiceWorker'

// import { robots } from './robots'

ReactDOM.render(
  <App />

    , document.getElementById('root'))
registerServiceWorker()
