import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, Card, Typography, Spin, Modal } from "antd";
import { addPokemon, selectCaughtPokemons } from "../../store/pokemonSlice";
import styles from "./PokemonPage.module.css";

const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonApi, setPokemonApi] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
    const [loading, setLoading] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const dispatch = useDispatch();
    const caughtPokemons = useSelector(selectCaughtPokemons);

    const fetchPokemons = async () => {
        if (!pokemonApi || loading) return;
        setLoading(true);
        try {
            const { data } = await axios.get(pokemonApi);
            const detailedPokemons = await Promise.all(
                data.results.map(async (pokemon) => {
                    const details = await axios.get(pokemon.url);
                    return {
                        name: pokemon.name,
                        image: details.data.sprites.other.dream_world.front_default,
                        stats: {
                            hp: details.data.stats[0].base_stat,
                            attack: details.data.stats[1].base_stat,
                            defense: details.data.stats[2].base_stat,
                            speed: details.data.stats[5].base_stat,
                        },
                    };
                })
            );
            setPokemons((prev) => [...prev, ...detailedPokemons]);
            setPokemonApi(data.next);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    useEffect(() => {
        const scroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                fetchPokemons();
            }
        };

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, [loading]);

    const pokemonCheck = (pokemonName) => {
        return caughtPokemons.some(pokemon => pokemon.name === pokemonName);
    };

    const getToCollection = (pokemon) => {
        if (!pokemonCheck(pokemon.name)) {
            dispatch(addPokemon(pokemon));
        }
    };

    return (
        <div className={styles.pokemonContainer}>
            <div className={styles.space}></div>
            {pokemons.map((pokemon) => (
                <Card key={pokemon.name} className={styles.pokemonCard}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <Typography className={styles.title}>{pokemon.name}</Typography>
                    <div className={styles.buttons}>
                        <Button onClick={() => getToCollection(pokemon)} type="primary" disabled={pokemonCheck(pokemon.name)}>
                            {pokemonCheck(pokemon.name) ? <div className={styles.icon}>&#10003;</div> : "Добавить"}
                        </Button>
                        <Button type="primary" onClick={() => setSelectedPokemon(pokemon)}>
                            Характеристики
                        </Button>
                    </div>
                </Card>
            ))}
            {loading && (
                <div className={styles.loading}>
                    <Spin />
                </div>
            )}
            {selectedPokemon && (
                <Modal title={selectedPokemon.name} open={true} footer={null} className={styles.characteristicModal}>
                    <Button type="primary" onClick={() => setSelectedPokemon(null)}>Назад</Button>
                    <div className={styles.modalCharacteristic}>
                        <img src={selectedPokemon.image} alt={selectedPokemon.name} />
                        <div className={styles.characteristics}>
                            <p className={styles.hp}>здорвье: {selectedPokemon.stats.hp}</p>
                            <p className={styles.attack}>атака: {selectedPokemon.stats.attack}</p>
                            <p className={styles.defense}>защита: {selectedPokemon.stats.defense}</p>
                            <p className={styles.speed}>скорость: {selectedPokemon.stats.speed}</p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default PokemonPage;
