import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import CardList from './CardList'
import 'tachyons'
import registerServiceWorker from './registerServiceWorker'

import { robots } from './robots'

ReactDOM.render(
  <CardList robots={robots} />

    , document.getElementById('root'))
registerServiceWorker()
