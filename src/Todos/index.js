import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/Todos/App'
import todoApp from './src/Todos/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)

