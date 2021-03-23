import './Card-list.style.css'
import { Card } from './../Card/Card.component'

const CardList = (props) => {

    return(
        <div className='card-list'>
       
          {props.monster.map(monster=>{
           
            return <Card key={monster.id} monsters={monster}/>
      
         })}
        </div>
    )
} 
export default CardList