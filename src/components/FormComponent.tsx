import {useForm} from "react-hook-form";
import userValidator from "../validators/user.validator.tsx";
import {joiResolver} from "@hookform/resolvers/joi";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver:joiResolver(userValidator)
    });

    const customeHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customeHandler)}>
                <label>
                    <input className='border-2' type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input className='border-2' type="text" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input className='border-2' type="number" {...register('age')}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button className='border-2' disabled={!isValid}>send</button>
            </form>
        </div>
    );
};






