import React from 'react';

function TodayCard() {
    return <div className="bg-white"></div>;
}

function ToDayWeather() {
    return (
        <div className="my-5">
            <h1 className="text-[25px] font-semibold text-white">Today</h1>
            <div className="">
                <TodayCard />
            </div>
        </div>
    );
}

export default ToDayWeather;
