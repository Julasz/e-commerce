import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/ItemListContainter/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/cart/Cart';
import Contacto from './Components/index/Contacto'
import './App.css';
import {Index} from './Components/index/Index'
import Footer from './Components/index/Footer';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/"><Index/></Route>
            <Route exact path="/categoria/:id" component={ItemListContainer}/>
            <Route exact path="/productos/:productId" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/contacto">{Contacto}</Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
