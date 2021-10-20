import './App.css';
import './Components/navbar/navbar.scss'
import './Components/items/items.scss'
import './Components/items/itemCount.scss'
import NavBar from './Components/navbar/NavBar';
import { ItemListContainer } from './Components/items/ItemListContainer';
import { ItemCount } from './Components/items/ItemCount';


function App() {
  return (
    <>
      <div>
          <NavBar />
          <ItemListContainer/>
          <ItemCount/>

      </div>
    </>
  );
}

export default App;
