import { Route, Routes } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import PokemonArena from './pages/PokemonArena/PokemonArena';
import Layout from "./components/Layout/Layout.jsx";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<PokemonPage/>} />
                <Route path="/arena" element={<PokemonArena/>} />
            </Route>
        </Routes>
    );
}

export default App;
