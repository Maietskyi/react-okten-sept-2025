const baseUrl = 'http://jsonplaceholder.typicode.com';

export const getAll = async<T, > (endpoint:string) => {
    const responseResoult = await fetch(`${baseUrl}${endpoint}`)
        .then((res:Response) => res.json());
    return responseResoult as T;
}






// export const userService = {
//     getAllUsers: async ():Promise<IUser[]> => {
//         const users = await fetch(`${baseUrl}/users`)
//             .then((res) => res.json());
//         console.log(users);
//         return users;
//     }
// }
// const postService = {}
// const commentService = {}