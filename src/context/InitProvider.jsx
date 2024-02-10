import { createContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const InitContext = createContext();
export const useInit = () => useContext(InitContext);

function InitProvider({ children }) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [locationData, setLocationData] = useState({
        latitude: '',
        longitude: '',
        timestamp: ''
    });
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data) => {
                setLocationData((cu) => ({
                    ...cu,
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                    timestamp: data.timestamp
                }));
            });
        } else {
            toast.success('Geolocation is not available in your browser.');
        }
    }, []);

    useEffect(() => {
        // if (locationData.latitude && locationData.longitude) {
        //     fetch(
        //         `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latitude}&lon=${locationData.longitude}&units=metric&exclude={current}&appid=${apiKey}`
        //     )
        //         .then((resData) => {
        //             return resData.json();
        //         })
        //         .then((data) => {
        //             console.log(data);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }
        if (locationData.latitude && locationData.longitude) {
            fetch(
                `https://geocode.maps.co/reverse?lat=${locationData.latitude}&lon=${locationData.longitude}&api_key=65c6f5b78dce6416502357hyac9e83f`
            )
                .then((resData) => {
                    return resData.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [locationData]);

    const value = useMemo(() => {
        return { weatherData, setWeatherData, locationData, setLocationData };
    }, [weatherData, locationData]);

    return <InitContext.Provider value={value}>{children}</InitContext.Provider>;
}

export default InitProvider;
