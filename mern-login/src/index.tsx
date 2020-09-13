// src/index.tsx

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import AppRouter from './AppRouter'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<AppRouter />, document.getElementById('root'))

serviceWorker.unregister()
