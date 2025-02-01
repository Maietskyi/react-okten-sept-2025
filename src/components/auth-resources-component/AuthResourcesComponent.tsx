// import {useEffect, useState} from "react";
// // імпортую хуки useEffect та useState з React
// import {loadAuthProducts, refresh} from "../services/api.services.ts";
// // імпортую функції loadAuthProducts та refresh із сервісу API
// import {IProduct} from "../models/IProduct.ts";
// // імпортую інтерфейс IProduct, щоб визначити тип для продуктів
// //оголошую змінну яка є функціональним компонентом AuthResourcesComponent
// const AuthResourcesComponent = () => {
//     // оголошую стан для зберігання масиву продуктів, використовую хук useState з типом IProduct[]
//     const [products, setProducts] = useState<IProduct[]>([]);
// // викликаю хук useEffect, який виконується після першого рендеру компонента
//     useEffect(() => {
//         // викликаю запит який повертає продукти із авторизованої точки після першого рендеру
//         loadAuthProducts()
//             // витягую масив продуктів
//             .then((products) => {
//                 // виводжу отримані продукти в консоль для перевірки
//                 console.log(products);
//                 // Зберігаю отримані продукти у стан products
//                 setProducts(products);
//             })
//             // далі, якщо виникає помилка - обробляю її в catch
//             .catch((reason) => {
// // Помилку виводжу в консоль
//                 console.log(reason);
//                 // викликаю функцію refresh для оновлення токенів
//                 refresh().then(() => {
//                     // у випадку помилки - повторно викликаю функцію яка повертає проміс з продуктами із авторизованої точки
//                     loadAuthProducts()
//                         // повторно завантажую масив продуктів і зберігаю їх, в useState для виводу на сторінку
//                         .then((products) => setProducts(products));
//                 });
//             });
//         // Порожній масив залежностей, щоб ефект виконувався один раз, а не перезаписувався весь час
//     }, []);
//     // повертаю розмітку на сторінку AuthResourcesPage
//     return (
//         <div>
//             {/* Виводжу отримані продукти */}
//             {products.map((product) => (
//                 // роблю загальний дів в якому буду повертати інформацію про продукти
//                 <div key={product.id} className="p-2 border-b">
//                     <p>{product.id}</p>
//                     <h3>{product.title}</h3>
//                     <p>{product.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// // роблю дефолтний експорт компоненти AuthResourcesComponent
// export default AuthResourcesComponent;