import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import ButtonComponent from "../Button/ButtonComponent";

const LoginForm = () => {
  const initialData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);
  const dispatch = useDispatch();

  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setUserData(initialData);
  };

  const onLogin = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(userData));
    resetForm();
  };

  return (
    <>
      <h1 className="h3 fs-4">Login</h1>
      <Form className="form-create" autoComplete="off" onSubmit={onLogin}>
        <Form.Group className="col-md-11" controlId="username">
          <Form.Label>Username</Form.Label>
          <FloatingLabel
            controlId="username"
            label="Tu nombre de usuario..."
            className="mb-3"
          >
            <Form.Control
              required
              placeholder="username"
              type="text"
              maxLength="30"
              value={userData.username}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="col-md-11" controlId="password">
          <Form.Label>Password</Form.Label>
          <FloatingLabel
            controlId="password"
            label="Contraseña..."
            className="mb-3"
          >
            <Form.Control
              required
              placeholder="password"
              type="password"
              value={userData.password}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>
        <ButtonComponent
          className="m-3"
          buttonText="Login"
          actionOnClick={onLogin}
        />
      </Form>
    </>
  );
};

export default LoginForm;
