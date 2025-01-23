import {useEffect} from "react";
import {loadAuthProducts} from "../services/api.services.ts";


const AuthResourcesComponent = () => {
    useEffect(() => {
        loadAuthProducts()
            .then(products=>{
                console.log(products);
            })
    }, []);

    return (
        <div>

        </div>
    );
};

export default AuthResourcesComponent;