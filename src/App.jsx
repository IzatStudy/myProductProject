import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;

