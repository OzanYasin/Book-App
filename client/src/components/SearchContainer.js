import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearFilters } from '../features/allBooks/allBooksSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchContainer = () => {
  const { search, searchStatus, searchType, sort, sortOptions, isLoading } =
    useSelector((store) => store.allBooks);
  const { bookTypeOptions, statusOptions } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return; // it will return only request is done
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <Container>
      <Form className='form'>
        <h4>search form</h4>
          {/* search */}
          <Row>
            <Col sm>
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          </Col>
          {/* status search */}
          <Col sm>
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          </Col>
          </Row>
          {/* type search */}
          <Row>
            <Col sm>
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...bookTypeOptions]}
          />
          </Col>
          <Col sm>
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          </Col>
          <Col sm className="buttonContainer">
          <Button className='orangeButton'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </Button>
          </Col>
          </Row>
      </Form>
      </Container>
    </Wrapper>
  );
};

export default SearchContainer;
