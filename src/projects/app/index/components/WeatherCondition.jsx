import React from 'react';
import { HumidityIconLine, RainIconLine, WindIconLine } from '../../../utils/SVGIcon';

const WeatherCard = ({ svgIcon, value, title }) => {
    return (
        <div className="w-[110px] h-[116px] p-[15px] flex flex-col gap-1.5 justify-between items-center bg-white rounded-[20px]">
            <div className="text-[#06060F]">{svgIcon}</div>
            <h1 className="text-[#06060F]">{value}</h1>
            <h4 className="text-[#06060F80]">{title}</h4>
        </div>
    );
};

function WeatherCondition({ data }) {
    return (
        <div className="w-full flex gap-5 mt-8">
            <WeatherCard
                svgIcon={<WindIconLine />}
                value={`${data?.wind_speed || 0} km/h`}
                title="Wind"
            />
            <WeatherCard
                svgIcon={<HumidityIconLine />}
                value={`${data?.humidity || 0}%`}
                title="Humidity"
            />
            <WeatherCard svgIcon={<RainIconLine />} value={`${data?.clouds || 0}%`} title="Rain" />
        </div>
    );
}

export default WeatherCondition;
