import {useEffect, useState} from "react";
// імпортую хуки useEffect та useState з React

// імпортую функції loadAuthProducts та refresh із сервісу API
import {IUser} from "../../models/IUser.ts";
import {loadAuthUsers, refresh} from "../../sirvices/api.services.ts";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";
import {Outlet} from "react-router";
// імпортую інтерфейс IProduct, щоб визначити тип для продуктів
//оголошую змінну яка є функціональним компонентом AuthResourcesComponent
const AuthUsersComponent = () => {
    // оголошую стан для зберігання масиву продуктів, використовую хук useState з типом IUser[]
    const [users, setUsers] = useState<IUser[]>([]);
// викликаю хук useEffect, який виконується після першого рендеру компонента
    useEffect(() => {
        // викликаю запит який повертає продукти із авторизованої точки після першого рендеру
        loadAuthUsers()
            // витягую масив продуктів
            .then((users: IUser[]) => {
                // виводжу отримані продукти в консоль для перевірки
                console.log(users);
                // Зберігаю отримані продукти у стан products
                setUsers(users);
            })
            // далі, якщо виникає помилка - обробляю її в catch
            .catch((reason: string) => {
// Помилку виводжу в консоль
                console.log(reason);
                // викликаю функцію refresh для оновлення токенів
                refresh().then(() => {
                    // у випадку помилки - повторно викликаю функцію яка повертає проміс з продуктами із авторизованої точки
                    loadAuthUsers()
                        // повторно завантажую масив продуктів і зберігаю їх, в useState для виводу на сторінку
                        .then((users) => setUsers(users));
                });
            });
        // Порожній масив залежностей, щоб ефект виконувався один раз, а не перезаписувався весь час
    }, []);
    // повертаю розмітку на сторінку AuthResourcesPage
    return (
        <div>
        <div>
            {/* Виводжу отримані продукти */}
            {users.map((user) => (
                // роблю загальний дів в якому буду повертати інформацію про продукти
                <div key={user.id} className="p-2 border-b">
                    <p>{user.id}</p>
                    <h3>{user.firstName}</h3>
                    <p>{user.image}</p>
                </div>
            ))}
        </div>
            <div>
                <Outlet/>
                <PaginationComponent totalPages={2}/>
            </div>
        </div>
    );
};

// роблю дефолтний експорт компоненти AuthResourcesComponent
export default AuthUsersComponent;