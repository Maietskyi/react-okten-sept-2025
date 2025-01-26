import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";
// імпорти потрібних компонентів і сторінок

export const routes = createBrowserRouter([
    // експортуємо оголошену змінну routes для переходу на сторінки, змінна містить масив зі шляхами
    {
        // оголошую загальний path: '/', що є моєю головною (домашньою) сторінкою
        // element: <MainLayout/> — базова сторінка, (базовий компонент) яка і відображається для шляху '/'
        path: '/', element: <MainLayout/>, children:[
            // Додаю children, тобто дочірні шляхи для головної сторінки
            // на HomePage і буде відображатись вся інформація для головної сторінки
            {index:true, element:<HomePage/>},
            // path: 'login' відповідає шляху '/login'
            {path:'login',element:<LoginPage/>},
            // також дочірній шлях для сторінки із захищеними ресурсами, котрі стають доступними коли ми логінимось
            {path:'/auth/resources',element:<AuthResourcesPage/>}
        ]
    }
])