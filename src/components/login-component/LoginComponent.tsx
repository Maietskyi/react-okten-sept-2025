import { useState, useEffect } from "react";
import {login} from "../../routers/api.services.ts";


const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setUsername("");
            setPassword("");
        }
    }, [isLoggedIn]);

    const handleLogin = async (e:any) => {
        e.preventDefault();
        try {
            await login({
                username,
                password,
                expiresInMins: 1
            });
            setIsLoggedIn(true);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <h2>Логін</h2>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Увійти</button>
                </form>
            ) : (
                <p>Ви успішно увійшли!</p>
            )}
        </div>
    );
};

export default LoginComponent;








// import { useState } from "react";
// import {login} from "../../routers/api.services.ts";
//
//
// const LoginComponent = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//
//     const handleLogin = async (e:any) => {
//         e.preventDefault();
//         try {
//             await login({
//                 username,
//                 password,
//                 expiresInMins: 1
//             });
//             setUsername("");
//             setPassword("");
//             setIsLoggedIn(true);
//         } catch (error) {
//             console.error("Login failed", error);
//         }
//     };
//
//     return (
//         <div>
//             <h2>Логін</h2>
//             {!isLoggedIn ? (
//                 <form onSubmit={handleLogin}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Увійти</button>
//                 </form>
//             ) : (
//                 <p>Ви успішно увійшли!</p>
//             )}
//         </div>
//     );
// };
//
// export default LoginComponent;