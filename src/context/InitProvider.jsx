import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const InitContext = createContext();
export const useInit = () => useContext(InitContext);

function InitProvider({ children }) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [weatherData, setWeatherData] = useState({});
    const [locationData, setLocationData] = useState({
        latitude: '23.9456166',
        longitude: '90.2526382'
    });
    useEffect(() => {
        try {
            navigator.geolocation.getCurrentPosition((data) => {
                setLocationData((cu) => ({
                    ...cu,
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                    timestamp: data.timestamp
                }));
            });
        } catch (error) {
            toast.error(error.toString());
        }
    }, []);
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latitude}&lon=${locationData.longitude}&units=metric&exclude={current}&appid=${apiKey}`
            )
            .then(({ data }) => {
                setWeatherData(data);
            })
            .catch((error) => {
                toast.error(error.toString());
            });
    }, [locationData]);

    const value = useMemo(() => {
        return { weatherData, setWeatherData, locationData, setLocationData };
    }, [weatherData, locationData]);

    return <InitContext.Provider value={value}>{children}</InitContext.Provider>;
}

export default InitProvider;
