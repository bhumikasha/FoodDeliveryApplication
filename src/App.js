import "./App.css";
import Signup from './pages/signup/SignupPage';
import Login from './pages/login/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Delivery App</h1>
        <Login></Login>
        <Signup></Signup>
      </header>
    </div>
  );
}

export default App;
