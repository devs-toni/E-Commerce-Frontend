import logo from './logo.svg';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Page404 from './components/Page404';


function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <Page404 />
    </div>
  );
}

export default App;
