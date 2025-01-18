import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm<IFormProps>({
        mode: 'all',
    });

    console.log(register);
    const customeHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customeHandler)}>
                <label><input className='border-2' type="text" {...register('username', {
                    required: true,
                    // pattern:{
                    //    value:/\w+/,
                    //     message:'wrong name',
                    // }
                    minLength: {value: 4, message: 'wrong name'}
                })}/>
                    {
                        errors.username && <div>
                            {errors.username.message}
                        </div>
                    }
                </label>
                <label><input className='border-2' type="text" {...register('password', {
                    required: true,
                    minLength: {value: 3, message: 'pass too short'},
                    maxLength: {value: 6, message: 'pass too long'}
                })}/>
                    {
                        errors.password && <div>
                            {errors.password.message}
                        </div>
                    }
                </label>
                <label><input className='border-2' type="number" {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1, message: 'age to small'},
                    max: {value: 117, message: 'age to big'}
                })}/>
                    {
                        errors.age && <div>
                            {errors.age.message}
                        </div>
                    }
                </label>
                <button className='border-2' disabled={!isValid}>send</button>
            </form>
        </div>
    );
};






