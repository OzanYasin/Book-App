import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logo, FormRow } from '../components';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { registerUser, loginUser } from '../features/user/userSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Wrapper className="full-page">
      <Form className="form" onSubmit={onSubmit}>
        <Tabs
          defaultActiveKey="login"
          id="tab"
          onSelect={toggleMember}
          className="mb-3"
          fill
        >
          <Tab eventKey="login" title="Login" disabled={values.isMember && true}>
            {!values.isMember && (
              <FormRow
                type="text"
                name="name"
                value={values.name}
                handleChange={handleChange}
              />
            )}
            {/* email */}
            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* password */}
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            <Button className='orangeButton' type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'submit'}
            </Button>
          </Tab>
          <Tab eventKey="signup" title="Signup" disabled={!values.isMember && true}>
            {!values.isMember && (
              <FormRow
                type="text"
                name="name"
                value={values.name}
                handleChange={handleChange}
              />
            )}
            {/* email */}
            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* password */}
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            <Button className='orangeButton' type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'submit'}
            </Button>
          </Tab>
        </Tabs>
      </Form>
    </Wrapper >
  );
}

export default Register;
