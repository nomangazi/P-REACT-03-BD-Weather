import dayjs from 'dayjs';
import React from 'react';

function SearchHeader() {
    return (
        <div className="header flex justify-start items-start gap-[15px]">
            <span className="mt-1">
                <i className="fa-solid fa-location-dot size-7"></i>
            </span>
            <div className="flex flex-col">
                <span className="text-lg font-medium">Dhaka, Bangladesh</span>
                <span className="text-xs">{dayjs(new Date()).format('MMMM DD, hh:mm A')}</span>{' '}
            </div>
        </div>
    );
}

export default SearchHeader;
