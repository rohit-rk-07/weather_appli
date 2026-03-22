import {useRef} from 'react';

const Search = ({onSearch}) => {

    const inputRef = useRef();

    const fetchWeather = async (query) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=750ba6d938ae909bda9801b19e5fba4e`)
        const data = await res.json();
        onSearch(data);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if(query) fetchWeather(query);
    }

    return(
        <div className="search-container">
            <form onSubmit={handleSearch}>

                <input
                ref={inputRef} 
                type="text" 
                placeholder="City Name..."
                />

                <button className="search-icon" type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
    );
}

export default Search;