import React, {useState} from 'react';
import {wetherFetch} from './Fetch'

const App = () => {

    const [weather, setWeather] = useState([]);
    const [input, setInput ] = useState([])


    const onSearch = async (e) => {
        e.preventDefault()
        let res = await wetherFetch(input)
        setWeather(res)
        setInput('')
    }



    return (
        <div className='main-container'>
            <form className='form' onSubmit={onSearch}>
            <input
            type="text"
            className='search'
            placeholder='Search'
            value={input} onChange={(e) => setInput(e.target.value)}  />
            </form>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">{weather.name}
                    <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;c</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
