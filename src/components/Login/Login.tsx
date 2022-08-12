import "./Login.css";
import { useState, ChangeEvent } from "react";

function Login() {
  const [values, setValues] = useState({ username: "", password: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
//    console.log(name, value);
    setValues({ ...values, [name]: value });
  }

  return (
    <form className="login" name="login" noValidate>
      <input
        onChange={handleChange}
        className="login__input input-username"
        name="username"
        value={values.username}
      />
      <input
        onChange={handleChange}
        className="login__input input-password"
        name="password"
        type="password"
        value={values.password}
      />
    </form>
  );
}

export default Login;
