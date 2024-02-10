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
    const [locationInfo, setLocationInfo] = useState(null);
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
        if (locationData.latitude && locationData.longitude) {
            fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latitude}&lon=${locationData.longitude}&exclude={current}&appid=${apiKey}`
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
        return { locationInfo, setLocationInfo };
    }, []);

    return <InitContext.Provider value={value}>{children}</InitContext.Provider>;
}

export default InitProvider;
