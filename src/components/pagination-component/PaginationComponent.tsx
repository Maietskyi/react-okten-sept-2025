import { useSearchParams } from "react-router-dom";
import { FC } from "react";

interface PaginationProps {
    totalPages: number;
}

export const PaginationComponent: FC<PaginationProps> = ({ totalPages }) => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
    const currentPage = Math.max(1, Math.min(totalPages, Number(searchParams.get('page')) || 1));

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    return (
        <div className='p-1 flex items-center justify-center'>
            <button
                className={`m-4 rounded-lg border-black border-2 p-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &#8592; prev
            </button>
            <span className="mx-4">Page {currentPage} of {totalPages}</span>
            <button
                className={`m-4 rounded-lg border-black border-2 p-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                next &#8594;
            </button>
        </div>
    );
};



// import {useSearchParams} from "react-router-dom";
// import {FC} from "react";
//
// export const PaginationComponent: FC = () => {
//
//     const [searchParams, setSearchParams] = useSearchParams({page: '1'});
//     let currentPage = Number(searchParams.get('page') || '1');
//     return (
//         <div className='p-1 flex items-center justify-center'>
//             <button
//                 className={`m-4 rounded-lg border-black border-2 p-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 onClick={() => {
//                     if (currentPage > 1) {
//                         setSearchParams({page: (--currentPage).toString()});
//                     }
//                 }} disabled={currentPage === 1}>&#8592; prev
//             </button>
//             <button
//                 className={`m-4 rounded-lg border-black border-2 p-2 ${currentPage === 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 onClick={() => {
//                     setSearchParams({page: (++currentPage).toString()});
//                 }} disabled={currentPage === 10}>next &#8594;
//             </button>
//         </div>
//     );
// };