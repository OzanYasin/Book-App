import BookInfo from './BookInfo';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { GiWhiteBook } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deleteBook, setEditBook } from '../features/book/bookSlice';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Book = ({
  _id,
  bookName,
  pageNumber,
  bookType,
  bookAuthor,
  status,
  createdAt,
}) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format('MMM Do YYYY'); // createdAt is coming from the server

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col className='mt-1'>
            <h5>{bookName}</h5>
            <p>{bookAuthor}</p>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <BookInfo icon={<FaCalendarAlt />} text={date} />
            </Col>
          </Row>
          <Row>
            <Col>
              <BookInfo icon={<GiWhiteBook />} text={bookType} />
            </Col>
          </Row>
          <Row>
            <Col>
              <BookInfo icon={<BsBook />} text={pageNumber} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className={`disabled status ${status}`}>{status}</Button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className='mt-3'>
            <Button className="greenButton me-2"><Link
              to="/add-book"
              onClick={() =>
                dispatch(
                  setEditBook({
                    editBookId: _id,
                    bookName,
                    pageNumber,
                    bookType,
                    bookAuthor,
                    status,
                  })
                )
              }
            >
              edit
            </Link>
            </Button>
            <Button
              className='orangeButton'
              onClick={() => dispatch(deleteBook(_id))}
            >
              delete
            </Button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Book;
