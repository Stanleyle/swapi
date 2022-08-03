import React from "react";


type PaginationProps = {
    setCurrentPage: (page: number | ((prevVar: number) => number)) => void
    count: number
    countPerPage: number
    currentPage: number
}


export const Pagination: React.FC<PaginationProps> = ({countPerPage, count, setCurrentPage, currentPage}) => {

    const pageCount = Math.ceil(count / countPerPage)
    const pages = Array.from({length: pageCount}, (_, i) => i + 1)


    return  <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>На первую</button>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>-1</button>
        {pages.map((page) => <button disabled={page === currentPage} key={page}
                                     onClick={() => setCurrentPage(page)}>{page}</button>)}
        <button disabled={currentPage === pageCount} onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>+1
        </button>
        <button disabled={currentPage === pageCount} onClick={() => setCurrentPage(pageCount)}>На последнюю</button>
    </div>


}