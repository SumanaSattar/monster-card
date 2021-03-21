
import './App.css';
import {Component} from 'react';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monster:[]      
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users=> this.setState({monster:users}))
  }
  render() {
    return(
      <div>
         {this.state.monster.map(monster=>{
           return <h1 key={monster.id}>{monster.name}</h1>
         })}
      </div>
    );
  }


}
  

export default App;
