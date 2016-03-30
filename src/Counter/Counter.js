/**
 * Created by janeluck on 3/29/16.
 */
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.onDecrement = this.onDecrement.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
        this.state = {
            times: this.props.times
        }
    }

    onIncrement(){
        this.setState({
            times: this.state.times + 1
        })
    }
    onDecrement(){
        this.setState({
            times: this.state.times - 1
        })
    }


    render() {

        return (
            <p>
                Clicked: {this.state.times} times
                {' '}
                <button onClick={this.onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={this.onDecrement}>
                    -
                </button>

            </p>
        )
    }
}

Counter.propTypes = {
    times: PropTypes.number.isRequired
}

export default Counter
