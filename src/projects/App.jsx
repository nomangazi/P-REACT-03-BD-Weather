import { SpeedInsights } from '@vercel/speed-insights/react';
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
            <SpeedInsights />
        </ComposeProviders>
    );
}

export default App;
