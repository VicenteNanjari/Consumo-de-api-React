import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css'
import { useEffect, useState } from 'react';

function Paginacion({ length, currentPage, filterPage }) {
    /*
    length: length of the array
    currentPage: function to set the current page
    filterPage: number of the page
    */
    const [page, setPage] = useState(1);

    let totalPages = Math.ceil(length / 10);
    length == 0 ? totalPages = 1 : totalPages = totalPages;

    useEffect(() => {
        currentPage(page)
    }, [page])

    useEffect(() => {
        setPage(filterPage)
    }, [filterPage])

    const clickFirst = () => {
        setPage(1);
    }
    
    const clickMinusTwo = () => {
        setPage(page - 2);
    }

    const clickMinusOne = () => {
        setPage(page - 1);
    }

    const clickPlusOne = () => {
        setPage(page + 1);
    }

    const clickPlusTwo = () => {
        setPage(page + 2);
    }

    const clickLast = () => {
        setPage(totalPages);
    }



    return (
        <Pagination className='pag'>
            {page == 1 || page == 2 || page == 3 ? null : <Pagination.First onClick={clickFirst}/>}
            {page > 2 ? <Pagination.Item onClick={clickMinusTwo}>{page-2}</Pagination.Item> : null}
            {page > 1 ? <Pagination.Item onClick={clickMinusOne}>{page-1}</Pagination.Item> : null}
            <Pagination.Item active>{page}</Pagination.Item>
            {page == totalPages ? null : <Pagination.Item onClick={clickPlusOne}>{page+1}</Pagination.Item>}
            {page == totalPages - 1 || page == totalPages ? null :<Pagination.Item onClick={clickPlusTwo}>{page+2}</Pagination.Item>}
            {page == totalPages - 2 || page == totalPages - 1 || page == totalPages ? null : <Pagination.Last onClick={clickLast}/>}
        </Pagination>
    );
}

export default Paginacion;