import React, { useEffect, useState } from 'react'
import { Container, Pagination } from 'react-bootstrap'
import './Pagination.scss'
import { useDataContext } from '../../contexts/DataContext';
import ReactPaginate from 'react-paginate';
const PaginationContent = () => {
  const { totalPages, currentPage, setCurrentPage,loading } = useDataContext();
  const [isMobile, setIsMobile] = useState(false);
  const pageNumbers = totalPages && Array.from({ length: totalPages }, (_, index) => index + 1);

  const onPageChange = (currentPage) => {
    if (isMobile) {
      
      setCurrentPage(currentPage.selected+1);
    }
    else{
      setCurrentPage(currentPage);
    }
  }


  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    checkIsMobile(); 
    console.log('isMobile',isMobile);
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile); 
    };
  }, [isMobile]);
  return (
    <Container className='page'>
      {totalPages > 0 && !loading && !isMobile && <Pagination>

        {currentPage > 1 && <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} />}
        {
          pageNumbers && pageNumbers.map((page, index) => (<Pagination.Item key={index} active={currentPage == page} onClick={() => onPageChange(page)}>{page}</Pagination.Item>))
        }


        {totalPages > currentPage && <Pagination.Next onClick={() => onPageChange(currentPage + 1)} />}

      </Pagination>}
      {
       totalPages > 0 && !loading && isMobile && 
       <ReactPaginate
       nextLabel=">"
       onPageChange={onPageChange}
       pageRangeDisplayed={3}
       marginPagesDisplayed={1}
       pageCount={totalPages}
       previousLabel="<"
       pageClassName="page-item"
       pageLinkClassName="page-link"
       previousClassName="page-item"
       previousLinkClassName="page-link"
       nextClassName="page-item"
       nextLinkClassName="page-link"
       breakLabel="..."
       breakClassName="page-item"
       breakLinkClassName="page-link"
       containerClassName="pagination"
       activeClassName="active"
       renderOnZeroPageCount={null}
     />
      }
    </Container>
  )
}

export default PaginationContent