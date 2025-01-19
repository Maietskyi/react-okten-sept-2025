import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {getCars} from "../../services/api.service.ts";

const CarComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars)
        });
    },[])
    return (
        <div>
            {cars.map((car) => (
                <div key={car.id}>
                    {car.id} - {car.brand}
                </div>
            ))}
        </div>
    );
};

export default CarComponent;