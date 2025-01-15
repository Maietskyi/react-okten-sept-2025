import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

export const SingleUsersDetailComponent = () => {

    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {user.name}
        </div>
    );
};
