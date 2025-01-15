import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const Some = () => {

    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        fetch('https://reqres.in/api/users?page=' + pg)
            .then(value => value.json())
            .then(value => {
                console.log(value)
            //     цього не потрібно
                setQuery(query)
            })
    }, [query]);

    return (
        <div>
            Some component
        </div>
    );
};

export default Some;