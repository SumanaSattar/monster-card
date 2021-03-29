import './SearchField.css'
const SearchField = ({placeholder,evenHandler}) => {
    return (  
        <input className='search' type='search' placeholder={placeholder} onChange={evenHandler}></input>
            );
}
 
export default SearchField;