import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import TariffsPage from "./pages/TariffsPage/TariffsPage.jsx";
import WarehousePage from "./pages/WarehousePage/WarehousePage.jsx";
import Login from "./pages/Login/Login.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="/tariffs" element={<TariffsPage />} />
                <Route path="/warehouse" element={<WarehousePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;

