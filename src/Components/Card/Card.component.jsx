import './card.styles.css'
export const Card = (props) => {
    console.log(props.monsters)
    return ( 
    <div className="card-container">

        <img src={`https://robohash.org/${props.monsters.id}?set=set2size=180x180`} alt="monster images" />  
        <h2 className='App'>{props.monsters.name}</h2>
        <p className='App'>{props.monsters.email}</p>
        
    </div> );
}
 