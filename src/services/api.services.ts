import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseType} from "../models/IProductsResponseType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPsir.ts";
// імпорти: бібліотеки, інтерфейсів, retriveLocalStorage - функції для отримання даних з LocalStorage

// типізую loginData для функції login
type loginData = {
    username: string,
    password: string,
    expiresInMins: number
}
// Оголошую константу axiosInstance із базовим URL для API авторизації та початковими заголовком, яка є axios екземпляром
const axiosInstance = axios.create({
    // присвоюю baseURL посилання dummyjson авторизації
    baseURL: "https://dummyjson.com/auth",
    // початковий заголовок
    headers: {}
})

// Додаю інтерсептор для запитів, який виконується (аерехоплює всі GET запити) перед кожним запитом
axiosInstance.interceptors.request.use((requestObject) => {
    // Перевіряю, чи метод запиту є "GET"
    if (requestObject.method?.toUpperCase() === "GET") {
        // якщо метод запиту GET - додаю до заголовків Authorization, який дорівнює Bearer + значення яке знаходиться в LocalStorage
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
//  повертаю об'єкт
})
// експортую оголошений метод login, який є асинхронною функцією яка приймає дані для входу та повертає проміс з accessToken і
// 	refreshToken токенами
export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithTokens> => {
    // оголошую деструктуризовану функцію, яка виконує постовий запит на `/login`
    // з переданими параметрами і отримує дані користувачів з токенами
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        // парамерти які передаються
        username, password, expiresInMins
    })
    // виводжу в консоль для перевірки отриманих токенів
    console.log(userWithTokens);
    // записую токени користувача у localStorag з ключем 'user'
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    // Повертаю отримані токени
    return userWithTokens;
}
// Експортуємо асинхронну функцію. яка повертає (завантажує) список продуктів, з аудентифікованої точки (якщо користувач авторизований)
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // Оголошую дуструктуровану змінну в якій виконую get запит на урлу `/products` і отримую список продуктів
    const {data: {products}} = await axiosInstance.get<IProductsResponseType>('/products');
    // Повертаю масив продуктів
    return products
}
// Експортую асинхронну функцію для оновлення токенів
export const refresh = async () => {
    // оголошую змінну iUserWithTokens, яка дістає токени з localStorage
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('/users');
    // оголошую деструктуризовану змінну, яка виконує постовий запит на '/refresh'
    const {
        data: {accessToken, refreshToken}
    } = await axiosInstance.post<ITokenPair>('/refresh', {
        // Надсилаємо на API - refreshToken для оновлення токенів
        refreshToken: iUserWithTokens.refreshToken,
        // Вказую що новий токен буде активний 1 хвилину
        expiresInMin: 1
    });
    // для перевірки виводжу новий accessToken в консоль
    console.log(accessToken);
    // для перевірки виводжу новий refreshToken в консоль
    console.log(refreshToken);
    // Оновлюю accessToken в локальних даних користувача
    iUserWithTokens.accessToken = accessToken;
    // Оновлюю refreshToken в локальних даних користувача
    iUserWithTokens.refreshToken = refreshToken;
    // Перезаписую оновлені токени користувача в localStorage
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));

}