# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
react-okten-sept-2024 - зламалась через те що я закомітив змінену гілку main
Поламався весь проект
продовжую тут з 3 Домашнього завдання

UYuu2f1 Частина 1 Ознайомитись з апі http://owu.linkpc.net/carsAPI/v1/doc важливо. (запасна урла http://185.69.152.209/carsAPI/v1/doc на випадок, якщо попередня не буде працювати) Створити сторінку, на якій вивести всі авто (з мінімальною інформацією) 
Частина 2 Створити сторінку з формою для створення об'єктів автомобіля . Створити послуги для роботи з апі. (робота сервісу через axios) Ввести валідацію відповідно до документації апі, щоб не можна було збререгти автівку, якщо вона не відповідає умовам Не забувайте про те, що потрібно все розділяти на компоненти, але без надлишку (окремий інпут не має сенсу обгорткти в компонент)

