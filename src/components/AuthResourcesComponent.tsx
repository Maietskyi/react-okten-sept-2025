import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.services.ts";
// Імпортую хук useEffect, а також функції loadAuthProducts - завантаження продуктів
// та refresh - для оновлення токенів із сервісу API

// оголошую змінну яка є функціональним компонентом
const AuthResourcesComponent = () => {
    // відкриваю хук useEffect, який виконується після першого рендеру компонента
    useEffect(() => {
        // викликаю функцію яка повертає проміс з продуктами із авторизованої точки
        loadAuthProducts()
            // витягую масив продуктів
            .then(products=>{
                // виводжу отримані продукти в консоль для перевірки
                console.log(products);
            // далі, якщо виникає помилка - обробляю її в catch
            }).catch(reason => {
            // Помилку виводжу в консоль
            console.log(reason);
            // викликаю функцію refresh для оновлення токенів і після її виконання
            refresh().then(()=> {
                // повторно викликаю функцію яка повертає проміс з продуктами із авторизованої точки
                loadAuthProducts()
                    .then(()=>loadAuthProducts())
                    // витягую масив продуктів і виводжу їх в консоль для перевірки
                    .then(value => console.log(value));
            })
        });
    }, []);

    return (
        <div>

        </div>
    );
};
// роблю дефолтний експорт компоненти AuthResourcesComponent
export default AuthResourcesComponent;