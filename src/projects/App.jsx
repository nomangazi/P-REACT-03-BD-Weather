import '../assets/css/style.css';
import RouteHandler from './RouteHandler';
import WeatherProvider from './contexts/WeatherProvider';
import ComposeProviders from './utils/ComposeProviders';

function App() {
    return (
        <ComposeProviders components={[WeatherProvider]}>
            <RouteHandler />
        </ComposeProviders>
    );
}

export default App;
