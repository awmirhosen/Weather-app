import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import getWeatherInfo from "./redux/weatherActions";


const Weather = () => {

    const {loading, data, error} = useSelector(state => state)
    const dispatch = useDispatch()
    const [back, setBack] = useState('cloudy');
    const [query, setQuery] = useState('');


    const handleGetWeather = (e) => {
        console.log(query)
        e.preventDefault();
        dispatch(getWeatherInfo(query))
        console.log(data)
        console.log(data.weather)
    }

    useEffect(() => {
        if (!data.main){
            return
        }
        let temp = data.main.temp
        if (temp < 12 ) {
            setBack('snowy')
        }else if (temp < 14 ) {
            setBack('rainy')
        }else if (temp < 25 ) {
            setBack('cloudy')
        }else if (temp < 35 ) {
            setBack('sunny')
        }


    }, [data]);




    return (
        <>
            <div className='main'>
                <div className={`w-100 h-100 ${back}`}>
                    <div className='w-100 h-100 cover'>
                        {/*search box*/}
                        <div className='pt-5 w-100 text-center'>
                            <form onSubmit={handleGetWeather}>
                            <input type="text" className='custom-input' placeholder='Enter the city' onChange={ e => setQuery(e.target.value)}/>
                            </form>
                        </div>

                        {loading ? (
                            <div className="loader">
                                <div className="blue dot" />
                                <div className="red dot" />
                                <div className="yellow dot" />
                            </div>
                        ) : data.main ? (
                            <div>
                                <div className='w-100 text-center mt-5 pt-5'>
                                    <p className='text-light mt-5 pt-5 tem-box w-50 mx-auto'>
                                        {data.main.temp} °C
                                    </p>
                                </div>

                                <p className='w-100 text-center mt-5 text-light fs-1'>{data.weather[0].main}</p>
                                <p className='w-100 text-center mt-5 text-light fs-1'>{data.wind.speed} | wind speed</p>
                            </div>
                        ) : error ? (
                            <div className="w-75 mt-5 error mx-auto text-center">
                                <h3 className='text-danger pt-5 mb-4'>Oppps, we have some errors</h3>
                                <p className='text-light'>Please Check your Spelling in Search box</p>
                                <p className='text-light'>Please Check your Connection!</p>
                                <p className='text-light'>Make sure that that your specific Country exist</p>
                            </div>
                        ) : (
                            <h2 className='text-dark pt-5 mb-4 w-100 text-center'>SEARCH...</h2>
                        ) }

                        {/*temperature box*/}

                    </div>
                </div>
            </div>
        </>
    )

}

export default Weather;