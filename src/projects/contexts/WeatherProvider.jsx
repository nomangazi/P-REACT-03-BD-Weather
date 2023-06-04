import { createContext, useContext, useMemo, useState } from 'react';

export const WeatherContext = createContext();
export const useWeatherAPI = () => useContext(WeatherContext);

const WeatherProvider = ({ children }) => {
    const [searchType, setSearchType] = useState('city');

    const value = useMemo(() => {
        console.log('WeatherProvider useMemo');

        return {
            searchType,
            setSearchType
        };
    }, [searchType]);

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
