import React from 'react';
import { useState } from 'react';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('please fill out all fields');
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit} className="form">
          <h3>profile</h3>
          {/* Name */}
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          {/* lastName */}
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            value={userData.lastName}
            handleChange={handleChange}
          />
          {/* email */}
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          {/* location */}
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <Row>
              <Button className='orangeButton' type="submit" disabled={isLoading}>
                {isLoading ? 'Pleas Wait...' : 'Save Changes'}
              </Button>
          </Row>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Profile;
