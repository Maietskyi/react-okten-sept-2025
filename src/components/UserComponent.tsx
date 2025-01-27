import {FC, memo } from "react";

const UserComponent: FC<{ foo: () => void, arr: number[] }> = memo(({arr}) => {
    console.log('user')
    console.log(arr)
    return (
        <div>
            User Component
        </div>
    );
});

export default UserComponent;