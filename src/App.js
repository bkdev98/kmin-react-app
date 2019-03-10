import React, { Component } from 'react'

class App extends Component {
  state = {
    value: 0,
    autoIncrement: false,
  }

  handleIncrease = () => this.setState({ value: this.state.value + 1 })
  handleDecrease = () => this.setState({ value: this.state.value - 1 })
  handleReset = () => this.setState({ value: 0 })

  handleToggleAutoIncrement = () => {
    const nextValue = !this.state.autoIncrement

    if (nextValue) {
      this.autoIncrementInterval = setInterval(this.handleIncrease, 500)
    } else {
      clearInterval(this.autoIncrementInterval)
    }
    this.setState({ autoIncrement: !this.state.autoIncrement })
  }

  render() {
    const { value, autoIncrement } = this.state

    return (
      <div>
        <div>
          Current value:{' '}
          <span
            style={{
              color:
                value < 0 ? 'orangered' : value === 0 ? 'initial' : 'green',
            }}
          >
            {value}
          </span>
        </div>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
        <button onClick={this.handleReset}>Reset</button>
        <div>
          <input
            type="checkbox"
            checked={autoIncrement}
            onChange={this.handleToggleAutoIncrement}
          />
          Auto increment
        </div>
      </div>
    )
  }
}

export default App
