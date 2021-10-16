import './App.css';
import './Components/style.scss';
import NavBar from './Components/NavBar';
import { CartWidget } from '.Components/CartWidget';

function App() {
  return (
    <>
      <div>
          <NavBar />
          <CartWidget />
      </div>
    </>
  );
}

export default App;
