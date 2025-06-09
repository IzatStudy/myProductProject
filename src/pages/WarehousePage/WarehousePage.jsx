import classes from './Warehouse.module.scss';
import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import randomColor from 'randomcolor';
import { Input } from 'antd';

const WarehousePage = () => {
    const COLORS = useMemo(() => {
        return randomColor({ count: 50, luminosity: 'bright' });
    }, []);

    const CATEGORIES = ['Другое', 'Мебель', 'Строительные материалы', 'Бытовые приборы', 'Электроника'];

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', quantity: '', category: CATEGORIES[0] });
    const [editId, setEditId] = useState(null);
    const [history, setHistory] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const savedItems = localStorage.getItem('warehouseItems');
        const savedHistory = localStorage.getItem('warehouseHistory');
        if (savedItems) setItems(JSON.parse(savedItems));
        if (savedHistory) setHistory(JSON.parse(savedHistory));
    }, []);

    useEffect(() => {
        localStorage.setItem('warehouseItems', JSON.stringify(items));
        localStorage.setItem('warehouseHistory', JSON.stringify(history));
    }, [items, history]);

    const addHistory = (action) => {
        const entry = `${new Date().toLocaleString()}: ${action}`;
        setHistory([entry, ...history]);
    };

    const addOrEditItem = () => {
        if (!newItem.name || !newItem.quantity || !newItem.category) return;
        const parsedQuantity = parseInt(newItem.quantity, 10);
        if (editId !== null) {
            setItems(items.map(item =>
                item.id === editId
                    ? { ...item, name: newItem.name, quantity: parsedQuantity, category: newItem.category }
                    : item
            ));
            addHistory(`Изменён товар: ${newItem.name}`);
            setEditId(null);
        } else {
            const newItemParsed = {
                id: Date.now(),
                name: newItem.name,
                quantity: parsedQuantity,
                category: newItem.category
            };
            setItems([...items, newItemParsed]);
            addHistory(`Добавлен товар: ${newItem.name}`);
        }
        setNewItem({ name: '', quantity: '', category: CATEGORIES[0] });
    };

    const deleteItem = (id) => {
        const item = items.find(i => i.id === id);
        setItems(items.filter(item => item.id !== id));
        addHistory(`Удалён товар: ${item.name}`);
    };

    const editItem = (item) => {
        setEditId(item.id);
        setNewItem({ name: item.name, quantity: item.quantity.toString(), category: item.category });
    };

    const clearAll = () => {
        if (window.confirm('Удалить все товары?')) {
            setItems([]);
            addHistory('Очищен список всех товаров');
        }
    };

    const clearHistory = () => {
        if (window.confirm('Очистить историю операций?')) {
            setHistory([]);
        }
    };

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const chartData = items.map(item => ({ name: item.name, value: item.quantity }));

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className={classes.contentBlock}>
                <div className={classes.inputGroup}>
                    <h2>Склад</h2>
                    <input placeholder="Название" value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})}/>
                    <input type="number" placeholder="Количество" value={newItem.quantity} onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}/>
                    <select value={newItem.category} onChange={(e) => setNewItem({...newItem, category: e.target.value})}>
                        {CATEGORIES.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <div className={classes.buttonGroup}>
                        <button onClick={addOrEditItem}>{editId !== null ? 'Сохранить' : 'Добавить'}</button>
                        <button onClick={clearAll} className={classes.clearButton}>Очистить список</button>
                    </div>
                </div>
                <div className={classes.controls}>
                    <Input placeholder="Поиск" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className={classes.chartContainer}>
                    <PieChart width={300} height={300}>
                        <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </div>
                <p className={classes.totalInfo}>Всего: {totalQuantity}</p>
                <div className={classes.mainTable}>
                    <div className={classes.table}>
                        <ol>
                            <li>Название</li>
                            <li>Количество</li>
                            <li>Категория</li>
                            <li>Действия</li>
                        </ol>
                    </div>
                    <div>
                        {filteredItems.map(item => (
                            <ol key={item.id}>
                                <li>{item.name}</li>
                                <li>{item.quantity}</li>
                                <li>{item.category}</li>
                                <li>
                                    <button onClick={() => editItem(item)}>изменить</button>
                                    <button onClick={() => deleteItem(item.id)}>удалить</button>
                                </li>
                            </ol>
                        ))}
                    </div>
                </div>
                <div className={classes.history}>
                    <h3>История операций</h3>
                    <button onClick={clearHistory}>Очистить историю</button>
                    <ul>
                        {history.map((historyText, index) => (
                            <li key={index}>{historyText}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WarehousePage;
