import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div>Hello world</div>
        <div>
          This is my first <strong>React.js</strong> app
        </div>
      </div>
    )
  }
}

export default App
