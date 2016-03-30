/**
 * Created by janeluck on 3/29/16.
 */
import Counter from './Counter'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducer'
import { connect } from 'react-redux'
const store = createStore(counter)



