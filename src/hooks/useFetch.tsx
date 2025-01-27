import {useEffect, useState} from "react";

export const useFetch = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(values => {
                setUsers(values);
                console.log(users)
            });
        return () => {
            console.log('unsubscribe')
        }
    }, []);
    return users;
}