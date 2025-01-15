import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '1'})
    return (
        <div>
            <button className='border-2 border-black' onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    setQuery({pg: (--currentPage).toString()})
                }
            }}>prev
            </button>
            <button className='border-2 border-black' onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    setQuery({pg: (++currentPage).toString()})
                }
            }}>next
            </button>
        </div>
    );
};

