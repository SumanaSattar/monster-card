
import './App.css';
import {Component} from 'react';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monster:[
        {
          name:'Khizer',
          id:1
        },
        {
          name:'Ahsan',
          id:2
        }, {
          name:'Kinza',
          id:3
        },
      ]
      
    }
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
