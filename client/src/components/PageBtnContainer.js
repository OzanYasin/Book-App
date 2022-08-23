import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/allBooks/allBooksSlice';
import Pagination from 'react-bootstrap/Pagination';

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <Pagination size="lg">
        <Pagination.Prev onClick={prevPage} />
        {pages.map((pageNum) => {
          return (
            <Pagination.Item
              className={pageNum === page ? 'active' : ''}
              key={pageNum}
              onClick={() => dispatch(changePage(pageNum))}
            >
              {pageNum}
            </Pagination.Item>
          );
        })}
        <Pagination.Next onClick={nextPage} />
      </Pagination>
    </Wrapper>
  );
};

export default PageBtnContainer;
