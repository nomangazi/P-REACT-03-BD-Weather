import { SpeedInsights } from '@vercel/speed-insights/react';
import { ToastContainer } from 'react-toastify';
import InitProvider from '../context/InitProvider';
import RouteHandler from './RouteHandler';
import ComposeProviders from './utils/ComposeProviders';

function App() {
    // // -- Change fav icon dynamically
    // var link = document.querySelector("link[rel~='icon'");
    // link.href = "https://files.bikiran.com/assets/images/icon/icon-bik-logoV1.svg";
    return (
        <ComposeProviders components={[InitProvider]}>
            <RouteHandler />
            <ToastContainer
                position="bottom-center"
                closeButton={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                hideProgressBar={false}
                theme="colored"
            />
            <SpeedInsights />
        </ComposeProviders>
    );
}

export default App;
