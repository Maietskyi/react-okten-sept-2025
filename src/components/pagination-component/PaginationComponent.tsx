import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div className='p-1 flex items-center justify-center'>
            <button className='m-4 rounded-lg border-black border-2 p-2' onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()});
                }
            }}>&#8592; prev
            </button>
            <button className='m-4 rounded-lg border-black border-2 p-2' onClick={() => {
                setSearchParams({page: (++currentPage).toString()});
            }}>next &#8594;
            </button>
        </div>
    );
};
