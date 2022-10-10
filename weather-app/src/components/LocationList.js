import { useEffect, useState, useContext } from 'react';
import Weather from './Weather';
import { DataContext } from '../contexts/DataProvider';

export default function LocationList() {
    const { getWeatherInfo } = useContext(DataContext)

    return (
        <div>
            { getWeatherInfo.map((location) => <Weather location={location} preview={true} key={location.name} />) }
        </div>
    )
}