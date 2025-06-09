import { Button, Card, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as registerUser } from "../../store/userSlice";
import { useForm } from "react-hook-form";
import classes from "./Login.module.scss";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const {register, handleSubmit, formState: { errors },} = useForm();

    const useRegister = (data) => {
        if (!username.trim() || !password.trim())
            return;
        dispatch(registerUser({ username, password, email: data.email }));
        setIsRegistered(true);
        navigate("/")
    };

    return (
        <div className={classes.loginBlock}>
            <video src="/bgVideo.mp4" autoPlay muted loop className={classes.bgVideo}></video>
            <Card className={classes.loginCard}>
                <h2>Авторизация</h2>
                <br />
                <form onSubmit={handleSubmit(useRegister)}>
                    <label>
                        <Input placeholder="Имя" value={username} maxLength={10} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <input placeholder="email" className={classes.inputEmail}
                            {...register("email", {
                                required: "Обязательное поле для ввода",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                    message: "Некорректный email!",
                                },
                            })}/>
                        {errors.email && <div className={classes.text}>{errors.email.message}</div>}
                    </label>
                    <label>
                        <Input.Password placeholder="Пароль" value={password} maxLength={6} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <Button type="primary" htmlType="submit" disabled={!username.trim() || !password.trim()}>Авторизоваться</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Login;
