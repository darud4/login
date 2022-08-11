import "./Login.css";

function Login() {
  return (
    <form className="login" noValidate>
      <input className="login__input" name="username" />
      <input className="login__input" name="password" type="password" />
    </form>
  );
}

export default Login;
