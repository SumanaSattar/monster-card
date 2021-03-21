import './Card-list.style.css'
const CardList = (props) => {
    return(
        <div className='card-list'>
          {props.monster.map(monster=>{
           return <h1 key={monster.id}>{monster.name}</h1>
         })}
        </div>
    )
} 
export default CardList