import { useSelector } from "react-redux";
import { useState } from "react";
import { Select, Typography, Modal, Button } from "antd";
import { selectCaughtPokemons } from "../../store/pokemonSlice";
import styles from "./PokemonArena.module.css";

const { Title } = Typography;

const PokemonArena = () => {
    const caughtPokemons = useSelector(selectCaughtPokemons);
    const [first, setFirst] = useState(null);
    const [second, setSecond] = useState(null);
    const [battleResult, setBattleResult] = useState("");
    const [isModal, setIsModal] = useState(false);

    const getPokemonByName = (name) => {
        return caughtPokemons.find(pokemon => pokemon.name === name) || null;
    };

    const calculateStatistics = (pokemon) => {
        return Object.values(pokemon.stats).reduce((acc, stat) => acc + stat, 0);
    };

    const calculateBattleResult = () => {
        if (caughtPokemons.length < 2) {
            return "Нужно обязательно два покемона для битвы";
        }
        if (!first || !second) {
            return "Выберите двух покемонов";
        }
        if (first === second) {
            return "Выбирите разных покемонов";
        }

        const firstPokemon = getPokemonByName(first);
        const secondPokemon = getPokemonByName(second);

        if (!firstPokemon || !secondPokemon) {
            return "неверный  выбор";
        }

        const firstStats = calculateStatistics(firstPokemon);
        const secondStats = calculateStatistics(secondPokemon);

        return firstStats > secondStats
            ? `${firstPokemon.name} победил!`
            : `${secondPokemon.name} победил!`;
    };

    const pokemonBattle = () => {
        const result = calculateBattleResult();
        setBattleResult(result);
        setIsModal(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.space}></div>
            <div className={styles.card}>
                <h2 className={styles.title}>Арена Покемонов</h2>
                <hr />
                <div className={styles.selectorContainer}>
                    <Select
                        className={styles.select}
                        onChange={(value) => setFirst(value)}
                        options={caughtPokemons.map((p) => ({ label: p.name, value: p.name }))}
                        dropdownStyle={{ background: "dodgerblue" }}
                    />
                    <Select
                        className={styles.select}
                        onChange={(value) => setSecond(value)}
                        options={caughtPokemons.map((p) => ({ label: p.name, value: p.name }))}
                        dropdownStyle={{ background: "dodgerblue"}}
                    />
                </div>
                <Button type="primary" onClick={pokemonBattle} className={styles.button} disabled={!first || !second}>
                    Битва &#9876;
                </Button>
            </div>

            <div className={styles.pokemonContainer}>
                {first && (
                    <div className={styles.pokemonCard}>
                        <img src={getPokemonByName(first)?.image} alt={first} className={styles.pokemonImage}/>
                        <Typography className={styles.pokemonName}>{first}</Typography>
                        <div className={styles.stats}>
                            <p className={styles.hp}>Здоровье: {getPokemonByName(first)?.stats.hp}</p>
                            <p className={styles.attack}>Атака: {getPokemonByName(first)?.stats.attack}</p>
                            <p className={styles.defense}>Зашита: {getPokemonByName(first)?.stats.defense}</p>
                            <p className={styles.speed}>скорость: {getPokemonByName(first)?.stats.speed}</p>
                        </div>
                    </div>
                )}
                {second && (
                    <div className={styles.pokemonCard}>
                        <img src={getPokemonByName(second)?.image} alt={second} className={styles.pokemonImage}/>
                        <Typography className={styles.pokemonName}>{second}</Typography>
                        <div className={styles.stats}>
                        <p className={styles.hp}>Здоровье: {getPokemonByName(second)?.stats.hp}</p>
                            <p className={styles.attack}>Атака: {getPokemonByName(second)?.stats.attack}</p>
                            <p className={styles.defense}>Зашита: {getPokemonByName(second)?.stats.defense}</p>
                            <p className={styles.speed}>скорость: {getPokemonByName(second)?.stats.speed}</p>
                        </div>
                    </div>
                )}
            </div>

            <Modal title="Результат битвы" open={isModal} onCancel={() => setIsModal(false)}
                   className={styles.resultModal}
                footer={[
                    <Button key="close" type="primary" onClick={() => setIsModal(false)}>
                        Назад
                    </Button>
                ]}
            >
                <Title level={4}>{battleResult}</Title>
            </Modal>
        </div>
    );
};

export default PokemonArena;
