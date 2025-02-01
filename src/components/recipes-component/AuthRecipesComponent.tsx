import {useEffect, useState} from "react";
// імпортую хуки useEffect та useState з React

// імпортую функції loadAuthProducts та refresh із сервісу API
import {loadAuthRecipes, refresh} from "../../sirvices/api.services.ts";
// import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";
import {Outlet} from "react-router";
import {IRecipe} from "../../models/IRecipe.ts";
// імпортую інтерфейс IProduct, щоб визначити тип для продуктів
//оголошую змінну яка є функціональним компонентом AuthResourcesComponent
const AuthRecipesComponent = () => {
    // оголошую стан для зберігання масиву продуктів, використовую хук useState з типом IUser[]
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
// викликаю хук useEffect, який виконується після першого рендеру компонента
    useEffect(() => {
        // викликаю запит який повертає продукти із авторизованої точки після першого рендеру
        loadAuthRecipes()
            // витягую масив продуктів
            .then((recipes: IRecipe[]) => {
                // виводжу отримані продукти в консоль для перевірки
                console.log(recipes);
                // Зберігаю отримані продукти у стан products
                setRecipes(recipes);
            })
            // далі, якщо виникає помилка - обробляю її в catch
            .catch((reason: string) => {
// Помилку виводжу в консоль
                console.log(reason);
                // викликаю функцію refresh для оновлення токенів
                refresh().then(() => {
                    // у випадку помилки - повторно викликаю функцію яка повертає проміс з продуктами із авторизованої точки
                    loadAuthRecipes()
                        // повторно завантажую масив продуктів і зберігаю їх, в useState для виводу на сторінку
                        .then((recipes) => setRecipes(recipes));
                });
            });
        // Порожній масив залежностей, щоб ефект виконувався один раз, а не перезаписувався весь час
    }, []);
    // повертаю розмітку на сторінку AuthResourcesPage
    return (
        <div>
        <div>
            {/* Виводжу отримані продукти */}
            {recipes.map((recipe) => (
                // роблю загальний дів в якому буду повертати інформацію про продукти
                <div key={recipe.id} className="p-2 border-b">
                    <h3>{recipe.name}</h3>
                    <p>{recipe.tags}</p>
                </div>
            ))}
        </div>
            <div>
                <Outlet/>
                {/*<PaginationComponent totalPages={20} />*/}
            </div>
        </div>
    );
};

// роблю дефолтний експорт компоненти AuthResourcesComponent
export default AuthRecipesComponent;