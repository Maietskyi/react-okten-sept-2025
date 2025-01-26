import {useEffect} from "react";
import {login} from "../services/api.services.ts";

// Компонент для автоматичного логіну користувача
const LoginComponent = () => {
    // хук useEffect - виконує дію логінації
    useEffect(() => {
        // Викликаємо функцію логіну при завантаженні компонента
        login({
            username: 'emilys',
            //  передаю параметр username - Логін з dummyjson
            password: 'emilyspass',
            //  передаю параметр password - Пароль з dummyjson
            expiresInMins: 1
            //  передаю параметр expiresInMins - Час сесії - 1 хвилина
        })
    }, []);
// Порожній масив залежностей, тому ефект виконується лише один раз
    return (
        <div>

        </div>
    );
};

export default LoginComponent;