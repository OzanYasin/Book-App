import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createBook,
  editBook,
} from '../../features/book/bookSlice';
import Container from 'react-bootstrap/esm/Container';
const AddBook = () => {
  const {
    isLoading,
    bookAuthor,
    bookName,
    pageNumber,
    bookType,
    bookTypeOptions,
    status,
    statusOptions,
    isEditing,
    editBookId,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookAuthor || !bookName || !pageNumber) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editBook({
          bookId: editBookId,
          book: { bookAuthor, bookName, pageNumber, bookType, status },
        })
      );
      return;
    }
    dispatch(
      createBook({ bookAuthor, bookName, pageNumber, bookType, status })
    );
  };

  const handleBookInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <Container>
        <Form className="form">
          <h3>{isEditing ? 'edit book' : 'add book'}</h3>
          {/* bookAuthor */}
          <FormRow
            type="text"
            name="bookAuthor"
            labelText="book author"
            value={bookAuthor}
            handleChange={handleBookInput}
          />
          {/* bookName */}
          <FormRow
            type="text"
            name="bookName"
            labelText="book name"
            value={bookName}
            handleChange={handleBookInput}
          />
          {/* pageNumber */}
          <FormRow
            type="number"
            min="0"
            name="pageNumber"
            labelText="page number"
            value={pageNumber}
            handleChange={handleBookInput}
          />
          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleBookInput}
            list={statusOptions}
          />
          {/* book type*/}
          <FormRowSelect
            name="bookType"
            labelText="book type"
            value={bookType}
            handleChange={handleBookInput}
            list={bookTypeOptions}
          />
          <Row>
            <Col>
              <Button
                type="submit" className='greenButton' onClick={handleSubmit} disabled={isLoading}>
                submit
              </Button>
            </Col>
            <Col>
              <Button type="button" className='orangeButton' onClick={() => dispatch(clearValues())}>
                clear
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Wrapper>
  );
};
export default AddBook;
