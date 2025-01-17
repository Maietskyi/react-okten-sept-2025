const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsers = async (page: string) => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    return await fetch(baseUrl + '/users' + '?skip=' + skip)
        .then(value => value.json());
}


// Можна так зробити

// export const getUsers = async (page: string) => {
//     let skip = 0;
//     const limit = 30;
//     if (+page > 0) {
//         skip = limit * (+page) - limit;
//     }
//     return await fetch(baseUrl + '/users' + '?skip=' + skip)