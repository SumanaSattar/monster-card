
import './App.css';
import {Component} from 'react';
import CardList from './Components/Card-list/Card-list.component';
import SearchField from './Components/Search-field/SearchField.component'
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
    const {monster,searchField}=this.state
    const filteredField = monster.filter(mon=>mon.name.toLowerCase().includes(searchField))
    console.log(filteredField)
    return(
      <div>
        <SearchField placeholder='search the robots' evenHandler={e=>{this.setState({searchField:e.target.value},()=>console.log(this.state.searchField))}}/>
        
        <CardList monster={filteredField} />
       
        
      </div>
    );
  }


}
  

export default App;
