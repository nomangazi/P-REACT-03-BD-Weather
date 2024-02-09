import { createContext, useEffect, useMemo, useState } from 'react';

const InitContext = createContext();
export const useInit = () => useContext(InitContext);

function InitProvider({ children }) {
    const [initData, setInitData] = useState(null);
    const [locationInfo, setLocationInfo] = useState(null);
    useEffect(() => {
        console.log(navigator);
    }, []);

    const value = useMemo(() => {
        return { initData, setInitData, locationInfo, setLocationInfo };
    }, [initData, locationInfo]);

    return <InitContext.Provider value={value}>{children}</InitContext.Provider>;
}

export default InitProvider;
