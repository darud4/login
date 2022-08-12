import "./Login.css";
import { useState, FormEvent, ChangeEvent } from "react";

interface ValuesType {
  username: string;
  password: string;
}

interface LoginProps {
  onSubmit: (o: ValuesType) => void;
}

export function Login({ onSubmit }: LoginProps) {
  const [values, setValues] = useState({ username: "", password: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <form className="login" name="login" onSubmit={handleSubmit} noValidate>
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
      <button className="login__submit">Войти</button>
    </form>
  );
}
