import {FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

export const FormComponent = () => {
    const [formState, setFormState] = useState<IFormProps>({
        username: 'default username',
        password: '1111'
    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: formState.username,
            password: formState.password
        };
        console.log(user);
    };

    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>)=>{
    //     const input = e.target as HTMLFormElement;
    //     console.log(input.value)
    //     console.log(input.name)
    //     setFormState({...formState, username: input.value});
    // };
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>)=>{
    //     const input = e.target as HTMLFormElement;
    //     console.log(input.value)
    //     setFormState({...formState, password: input.value});
    // }

    const handleInputChange = (e:FormEvent<HTMLInputElement>)=>{
        const input = e.target as HTMLFormElement;
        console.log(input.name)
        setFormState({...formState, [input.name]: input.value})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border-2' type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input className='border-2' type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button className='border-2'>send</button>
            </form>
        </div>
    );
};







// 1 варіант
// import {FormEvent, useState} from "react";
//
// interface IFormProps {
//     username: string;
//     password: string;
// }
//
// export const FormComponent = () => {
//     const [formState, setFormState] = useState<IFormProps>({
//         username: 'default username',
//         password: '1111'
//     })
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//     }
//
//     const handleUsernameChange = (e:FormEvent<HTMLInputElement>)=>{
//         const input = e.target as HTMLFormElement;
//         console.log(input.value)
//         setFormState({...formState, username: input.value});
//     };
//     const handlePasswordChange = (e:FormEvent<HTMLInputElement>)=>{
//         const input = e.target as HTMLFormElement;
//         console.log(input.value)
//         setFormState({...formState, password: input.value});
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input className='border-2' type="text" name={'username'} value={formState.username} onChange={handleUsernameChange}/>
//                 <input className='border-2' type="text" name={'password'} value={formState.password} onChange={handlePasswordChange}/>
//                 <button className='border-2'>send</button>
//             </form>
//         </div>
//     );
// };





// export const FormComponent = () => {
//     const [formState, setFormState] = useState<IFormProps>({
//         username: '1',
//         password: '1'
//     })
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const form = e.target as HTMLFormElement;
//         console.log(form);
//         console.log(form.username);
//         console.log(form.password);
//         console.log(form.username.value);
//         console.log(form.password.value);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input className='border-2' type="text" name={'username'}/>
//                 <input className='border-2' type="text" name={'password'}/>
//                 <button className='border-2'>send</button>
//             </form>
//         </div>
//     );
// };