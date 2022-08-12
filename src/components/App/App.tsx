import "./App.css";
import { Login } from "../Login/Login";

function App() {
  function handleLogin() {}

  return (
    <div className="app">
      Test
      <Login onSubmit={handleLogin} />
    </div>
  );
}

export default App;
