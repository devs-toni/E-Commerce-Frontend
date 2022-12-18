import './App.css';

import Navbar from './components/Navbar';
import { MyRouter } from './router/MyRouter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRouter />
    </div>
  );
}

export default App;
