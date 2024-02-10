import dayjs from 'dayjs';

export const GetTime = (timestamp) => {
    if (!timestamp) {
        return null;
    }
    return dayjs(timestamp).format('hh:mm:ss A');
};
export const GetDate = (timestamp) => {
    if (!timestamp) {
        return null;
    }
    return dayjs(timestamp).format('DD-MM-YYYY');
};

export const GetDateTime = (timestamp) => {
    if (!timestamp) {
        return null;
    }

    return dayjs(timestamp).format('DD-MM-YYYY hh:mm:ss A');
};
