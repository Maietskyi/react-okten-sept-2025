import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {
    const {handleSubmit, register} = useForm<IFormProps>();

    console.log(register);
    const customeHandler=(formDataProps:IFormProps)=>{
            console.log(formDataProps);
        };
    return (
        <div>
            <form onSubmit={handleSubmit(customeHandler)}>
                <input className='border-2' type="text" {...register('username')}/>
                <input className='border-2' type="text" {...register('password')}/>
                <input className='border-2' type="number" {...register('age')}/>
                <button className='border-2'>send</button>
            </form>
        </div>
    );
};






