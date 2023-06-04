import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './app/IndexPage';

function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Home */}
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouteHandler;
