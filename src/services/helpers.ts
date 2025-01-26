// експортую метод в якому є дженерік, і визначаю по якому ключу я хочу шукати
export const retriveLocalStorage = <T> (key:string) => {
    // в змінній object дістаю з localStorage значення ключа
    const object = localStorage.getItem(key);
    // у випадку якщо object не існує
    if (!object) {
        // то повертаю пустий об'єкт строго типізований так як початковий тип даних
        return {} as T;
    }
    //  у випадку якщо object існує, я роблю змінну parse яка буде парсити object
    const parse = JSON.parse(object);
    // і повертаю парс строго типізований
    return parse as T;
}