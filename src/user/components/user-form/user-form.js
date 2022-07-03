import { useState } from 'react'
import { Row, Col, Form, Input, Button, toaster } from '@glorious/taslonic/react';
import usersResource from '@src/user/resources/users/users';

export const UserForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const handleFormDataChange = ({ target: { name, value } }) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  return (
    <Row align="center">
      <Col md="4">
        <Form
          onSubmit={() => usersResource.save(formData)}
          submitSuccessTitle="Welcome!"
          submitSuccessMessage="You're now part of Kobbogó"
          submitErrorMessage="Ops, something went wrong."
        >
          <Row>
            <Col>
              <Input
                value={formData.username}
                name="username"
                aria-label="Username"
                placholder="Username"
                validations={buildUsernameValidations()}
                onChange={handleFormDataChange}
                required
                block
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                value={formData.password}
                name="password"
                aria-label="Password"
                placholder="Password"
                validations={buildPasswordValidations()}
                onChange={handleFormDataChange}
                required
                block
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" theme="primary" block>
                Create my user
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

function buildUsernameValidations(){
  return [{
    isValid: value => value.length > 1,
    errorMessage: 'Enter more than one character'
  }, {
    isValid: value => {
      const validCharsRegex = new RegExp(/^[a-z0-9]+$/);
      return validCharsRegex.test(value);
    },
    errorMessage: 'Enter letters and numbers only'
  }];
}

function buildPasswordValidations(){
  return [{
    isValid: value => value.length > 5,
    errorMessage: 'Must contain at least 6 characters'
  }];
}
