import './App.css';
import './Components/navbar/navbar.scss'
import './Components/items/items.scss'
import './Components/items/itemCount.scss'
import NavBar from './Components/navbar/NavBar';
import { ItemListContainer } from './Components/items/ItemListContainer';



function App() {
  return (
    <>
      <div>
          <NavBar />
          <ItemListContainer greeting="Bienvenidos a la tienda on-line de productos de salud y belleza de idraet y lidherma"/>
          

      </div>
    </>
  );
}

export default App;
