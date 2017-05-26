import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../sass/index.sass'

class App extends Component{
  render(){
    return(
      <div>react works</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
