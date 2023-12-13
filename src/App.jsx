import './App.css'
import React from 'react'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      count:0
    }
  }

  increase = ()=>{
    this.setState({count: this.state.count + 1})
  }

  decrease = ()=>{
    if(this.state.count>0){
      this.setState({count: this.state.count - 1})
    }
    console.log("-1")
  }

  restart=()=>{
    
    this.setState({count:this.state.count=0})
  }

  render(){
    return(
      <>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <div className='but'>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
            <button onClick={this.restart}>Restart</button>
        </div>
      </>
    )
  }

}


export default App