import WeatherForm from "../components/WeatherForm"
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';
import { AuthContext } from "../contexts/AuthProvider";

export default function Home() {
    const { getLocation } =useContext(DataContext)
    const { user } =useContext(AuthContext)
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
            {
                  (user.loggedIn)?
                  (
                    <>
                         <p>Welcome, { user.username }</p>
                         <WeatherForm />
                    </>
                  )
                  :
                  'Please Login to continue'

            }
            
        </div>
    )
}