import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {addCar} from "../services/api.service.ts";
import {carValidators} from "../components/validators/CarValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCarPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all'
    ,resolver:joiResolver(carValidators)
    })
    const createHandler = (data: ICar) => {
        addCar(data);
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" {...register("brand")}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register("price")}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register("year")}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>save car</button>
            </form>
        </>
    );
};

