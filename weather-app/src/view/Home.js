import WeatherForm from "../components/WeatherForm"
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

export default function Home() {
    const { getLocation } =useContext(DataContext)
    const [location, setLocation] = useState({})
    // const { name } = useParams()


    // useEffect(() => {
    //     getLocation(name, setLocation)
    // }, [])
    // useEffect(() => {
    //     getLocation(locationName, function(data) { 
    //         setLocationName(data)
    //         setLocationState('LOADED')
    //     })
    //     console.log('FETCHING')
    // }, [locationName])

    return(
        <div className="container">
            <h1 className="mb-3" >Welcome to Victor's Weather App!</h1>
            <h2>Please Login to continue</h2>
            <h5 className="mb-5">The app is currently still under maintenance so the functionality isn't exactly quite there yet. Emphasis on YET</h5>
            
            <WeatherForm />
        </div>
    )
}