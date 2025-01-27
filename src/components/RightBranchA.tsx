import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA = () => {
    const {counterValue, increment} = useContext(MyContext);
    return (
        <div>
            Right Branch A
            <button onClick={() => {
                increment(counterValue)
            }}>click me to increment counter in LBC</button>
        </div>
    );
};

export default RightBranchA;