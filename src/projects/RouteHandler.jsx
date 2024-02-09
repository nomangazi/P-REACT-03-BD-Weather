import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './app/index/IndexPage';

function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" />
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteHandler;
