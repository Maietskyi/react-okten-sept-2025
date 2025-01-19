import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validtors/CarValidator.ts";
// import {addCar} from "../../services/api.service.ts";



const CreateCarComponent = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<ICar>({
        mode: 'all',
        resolver:joiResolver(carValidator)
    });
    const createHandler = (data:ICar) => {
        // addCar(data);
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
                    <input type="number"{...register("price")}/>
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

export default CreateCarComponent;