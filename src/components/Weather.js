import { useEffect, useState } from 'react'
import {Form} from 'react-bootstrap'
function Weather () {
    const [city ,setCity] =useState('Cairo')
const [Temp ,setTemp] =useState([{}])
    const  key = 'e79b970929452539032d342598b1dbaf'
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${key}`).then((res) => {
            return res.json()
        }).then((data) => {
            setTemp(data)
        })
    },[city])
    if(city == '') {
        setCity("Cairo")
    } 
    else if(false) {
        setCity("Cairo")
    }
    return (
        <div className="bg-dark" id="All">
            <Form className='d-flex'>
                <Form.Control type='text' placeholder='Enter your city' id='Input' onChange={(e) => setCity(e.target.value)}/>
            </Form>
            <div className='content text-light'>
                <h1>{Temp.main?.temp}°C</h1>
                <h5>{Temp.name}</h5>
                <div className='humidity'>
                    <h3 >{Temp.main?.humidity} %</h3>
                    <p>humidity</p>
                </div>
                <div className='Wind'>
                    <h3>{Temp.wind?.speed} km/h</h3>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;