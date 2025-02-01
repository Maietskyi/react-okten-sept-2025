import {useSearchParams} from "react-router-dom";
import {FC} from "react";

export const PaginationComponent: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div className='p-1 flex items-center justify-center'>
            <button
                className={`m-4 rounded-lg border-black border-2 p-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => {
                    if (currentPage > 1) {
                        setSearchParams({page: (--currentPage).toString()});
                    }
                }} disabled={currentPage === 1}>&#8592; prev
            </button>
            <button
                className={`m-4 rounded-lg border-black border-2 p-2 ${currentPage === 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => {
                    setSearchParams({page: (++currentPage).toString()});
                }} disabled={currentPage === 10}>next &#8594;
            </button>
        </div>
    );
};