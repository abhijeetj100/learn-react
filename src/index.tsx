import React, { FormEventHandler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Form(){
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(`You clicked submit.`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" />
    </form>
  )
}

interface IFormes6Props{

}


interface IFormes6State{
  isToggleOn: boolean;
}

class Formes6 extends React.Component< IFormes6Props , IFormes6State>{

  constructor(props: IFormes6Props){
    super(props);
    this.state = {
      isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(`You clicked submit.`);
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
  }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <input type="submit" />
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON': 'OFF'}
      </button>
    </form>
  )
  }
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Form />
    <Formes6 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
