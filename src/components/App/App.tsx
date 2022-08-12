import "./App.css";
import { Login, ValuesType } from "../Login/Login";
import { api } from "../../utils/Api";

function App() {
  function handleLogin({ username, password }: ValuesType) {
    //    console.log(username, password);
    api
      .login(username, password)
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  return (
    <div className="app">
      Test
      <Login onSubmit={handleLogin} />
    </div>
  );
}

export default App;
