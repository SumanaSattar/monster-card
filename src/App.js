
import './App.css';
import {Component} from 'react';
import CardList from './Components/Card-list/Card-list.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monster:[] ,
      searchField:''     
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
        <input type='search' placeholder='search the robots' onChange={e=>{this.setState({searchField:e.target.value},()=>console.log(this.state.searchField))}}></input>
        <CardList monster={this.state.monster} />
       
        
      </div>
    );
  }


}
  

export default App;
