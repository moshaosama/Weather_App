import { useEffect, useState } from 'react'
import {Form} from 'react-bootstrap'
import swal from 'sweetalert2';
function Weather () {
    const [city ,setCity] =useState('Cairo')
const [Weather ,setWeather] =useState([{}])
const [Result ,setResult] =useState([{}])
    const  key = 'e79b970929452539032d342598b1dbaf'
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${key}`).then((res) => {
            return res.json()
        }).then((data) => {
            setWeather(data)
        })
    },[city])

    if(city.trim().length == 0) {
        setCity("Cairo");
    }
    return (
        <div className="bg-dark" id="All">
            <Form className='d-flex'>
                <Form.Control type='text' placeholder='Enter your city' id='Input' onChange={(e) => {
                    setTimeout(() => {
                        setCity(e.target.value);
                    }, 500);
                    // if(city == Weather.name){
                    //     swal.fire({
                    //         title:"No city this name",
                    //         icon:'error',
                    //         showCancelButton:true,
                    //     })
                    // }
                }}/>
            </Form>
            <div className='content text-light'>
                <h1>{Weather.main?.temp}°C</h1>
                <h5>{Weather.name}</h5>
                <div className='humidity'>
                    <h3 >{Weather.main?.humidity} %</h3>
                    <p>humidity</p>
                </div>
                <div className='Wind'>
                    <h3>{Weather.wind?.speed} km/h</h3>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;
