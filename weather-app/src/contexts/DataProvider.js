import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [weatherInfo, setWeatherInfo] = useState([])
    // const { user } = useContext(AuthContext)
    // const db = getFirestore()

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=331127d71ded2112a39dbf8df6309b69')
            .then((res) => res.json())
            .then((data) => {
                setWeatherInfo(data)
                console.log(data)
            })
    }, [])

    // const getLocation = async function(name, callback) {
    //     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e325c95def146ec0f6463c1ba75ad893`)
    //     const data = await res.json()
    //     callback(data)
    //     console.log(data)
    // }
    
    // const addLocation = async function(location) {
    //     const name = {
    //         location:location
    //     }
    //     const collectionRef = collection(db, 'users', user.uid, 'location')
    //     const docRef = await addDoc(collectionRef, name)
    // }

    const value = {
        weatherInfo: weatherInfo

        
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}
