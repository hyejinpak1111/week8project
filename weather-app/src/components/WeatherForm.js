import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function WeatherForm() {

    const { addLocation } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData(event.target)
        const location = formData.get('name')
        addLocation(location)
    }

    return(
        <form onSubmit={handleSubmit} className="container" >
            <div className="form-group">
                <label htmlFor="location">Check out other locations!</label>
                <input type="text" className="form-control" name="location" placeholder="Add a new city...." />
            </div>
            <button type="submit" className="btn btn-primary">Add City</button>
        </form>
    )
}