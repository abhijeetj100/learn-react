import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IClockProps, IClockState } from './App.model';

class Clock extends React.Component<IClockProps, IClockState> {
  constructor(props: IClockProps) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  timer!: NodeJS.Timer;

  componentDidMount() {
    console.log("Mounted");
    this.timer = setInterval(() => {
      console.log('tick...');
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log("Unmounted");
    clearInterval(this.timer);

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Clock />
      </div>
    )
  }
}

export default App;
