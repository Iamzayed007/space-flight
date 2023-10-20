import React from 'react'
import {Pagination} from 'react-bootstrap'
import './Pagination.scss'
import { useDataContext } from '../../contexts/DataContext';
const PaginationContent = () => {
    const { totalPages,currentPage,setCurrentPage} = useDataContext();
    console.log('totalPages',totalPages);
    const pageNumbers = totalPages && Array.from({ length: totalPages }, (_, index) => index + 1);
    // console.log('pageNumbers',pageNumbers);
    const onPageChange=(currentPage )=>{
        // console.log('pageNumbers',currentPage);
        setCurrentPage(currentPage);
    }
  return (
    <div className='page'>
     <Pagination>

     { currentPage > 1 && <Pagination.Prev onClick={()=>onPageChange(currentPage - 1)} />}
      {
      pageNumbers && pageNumbers.map((page,index)=> (<Pagination.Item active={currentPage == page} onClick={()=>onPageChange(page)}>{page}</Pagination.Item>))
      }
     

   { totalPages > currentPage && <Pagination.Next onClick={()=>onPageChange(currentPage + 1)} />}

    </Pagination>
    </div>
  )
}

export default PaginationContent