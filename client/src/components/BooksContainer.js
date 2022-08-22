import Book from './Book';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainer';
import Loading from './Loading';
import { getAllBooks } from '../features/allBooks/allBooksSlice';
import PageBtnContainer from './PageBtnContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BooksContainer = () => {
  const {
    books,
    isLoading,
    totalBooks,
    numOfPages,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }

  if (books.length === 0) {
    return (
      <Wrapper>
        <h2>No books to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalBooks} book{books.length > 1 && 's'} found
      </h5>
        <Container className="bookContainer">
      <Row>
        {books.map((book) => {
          return <Col sm={12} md={6} lg={4}><Book key={book._id} {...book} /></Col>
        })}
      </Row>
      </Container>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default BooksContainer;
