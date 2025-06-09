import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: "",
        password: "",
    },
    reducers: {
        register: (state, action) => {
            const { username, password } = action.payload;
            state.username = username;
            state.password = password;
            state.isAuthenticated = true;
            console.log(`Регистрация: Имя: ${username}   Почта: ${password}`);
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            if (state.username === username && state.password === password) {
                state.isAuthenticated = true;
                console.log(`Логин успешен: ${username}`);
            } else {
                console.log('Неверное имя или пароль');
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.password = "";
            state.points = 0;
            console.log('Выход из аккаунта');
        },
        addPoints: (state, action) => {
            state.points += action.payload;
        }
    }
});

export const { register, login, logout, addPoints } = userSlice.actions;
export default userSlice.reducer;

