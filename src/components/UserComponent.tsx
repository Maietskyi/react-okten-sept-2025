import {FC, memo } from "react";

const UserComponent:FC<{foo:()=>void}> = memo(() => {
    console.log('user')
    return (
        <div>
            User Component
        </div>
    );
});

export default UserComponent;