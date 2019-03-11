import React, { Component } from 'react'

class App extends Component {
  state = {
    value: 0,
    autoUpdateDelta: 0,
    autoUpdateSpeed: 500,
  }

  handleIncrease = () => this.setState({ value: this.state.value + 1 })
  handleDecrease = () => this.setState({ value: this.state.value - 1 })
  handleReset = () => this.setState({ value: 0 })

  handleAutoUpdateChange = event => {
    if (event.target.name !== 'autoUpdateDelta') return

    const delta = +event.target.value

    this.setState({ autoUpdateDelta: delta })

    if (this.autoUpdateInterval) {
      clearInterval(this.autoUpdateInterval)
    }

    if (delta !== 0) {
      this.autoUpdateInterval = setInterval(
        () => this.setState({ value: this.state.value + delta }),
        this.state.autoUpdateSpeed,
      )
    }
  }

  handleSpeedChange = event =>
    this.setState({ autoUpdateSpeed: event.target.value })

  render() {
    const { value } = this.state

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
        <form onChange={this.handleAutoUpdateChange}>
          <div>Auto update</div>
          speed:{' '}
          <input
            name="autoUpdateSpeed"
            type="number"
            value={this.state.autoUpdateSpeed}
            onChange={this.handleSpeedChange}
            disabled={this.state.autoUpdateDelta !== 0}
          />
          <input type="radio" name="autoUpdateDelta" value={1} /> Increase
          <input type="radio" name="autoUpdateDelta" value={-1} /> Decrease
          <input type="radio" name="autoUpdateDelta" value={0} /> Stop
        </form>
      </div>
    )
  }
}

export default App
