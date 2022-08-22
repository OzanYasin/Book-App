import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/allBooks/allBooksSlice';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
      <Button className="orangeButton" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </Button>
      <ButtonGroup>
        {pages.map((pageNum) => {
          return (
            <Button
              className={pageNum === page ? 'orangeButton active' : 'orangeButton'}
              key={pageNum}
              onClick={() => dispatch(changePage(pageNum))}
            >
              {pageNum}
            </Button>
          );
        })}
      </ButtonGroup>
      <Button className="orangeButton" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </Button>
    </Wrapper>
  );
};

export default PageBtnContainer;
