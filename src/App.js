import './App.css';
import './Components/style.scss';
import NavBar from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';


function App() {
  return (
    <>
      <div>
          <NavBar />
          <ItemListContainer/>
      </div>
    </>
  );
}

export default App;
