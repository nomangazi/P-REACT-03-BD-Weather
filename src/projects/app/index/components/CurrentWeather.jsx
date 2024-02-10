import React from 'react';

function CurrentWeather({ data }) {
    return (
        <div className="w-full flex flex-col items-center gap-2.5 mt-6">
            <div className="current-data__icon w-60">
                <img
                    src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`}
                    alt=""
                    className="size-full object-cover"
                />
            </div>
            <div className="current-data__text flex flex-col items-center gap-4">
                <span className="text-6xl font-bold">
                    {data?.temp}
                    <sup>&deg;</sup>
                </span>
                <span className="text-[30px]">{data?.weather?.[0]?.main}</span>
            </div>
        </div>
    );
}

export default CurrentWeather;
