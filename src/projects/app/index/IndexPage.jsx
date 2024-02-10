import { useInit } from '../../../context/InitProvider';
import CurrentWeather from './components/CurrentWeather';
import SearchHeader from './components/SearchHeader';
import WeatherCondition from './components/WeatherCondition';

function IndexPage() {
    const { weatherData } = useInit();

    return (
        <div className="h-screen text-white weather-bg bg-top bg-no-repeat bg-[length:top_center] w-[428px] max-w-xl mx-auto px-7.5 py-1.5">
            <SearchHeader />
            <CurrentWeather data={weatherData.current || {}} />
            <WeatherCondition data={weatherData.current} />
        </div>
    );
}

export default IndexPage;
