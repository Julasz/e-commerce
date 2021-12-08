import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/ItemListContainter/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/cart/Cart';
import './App.css';
import {Index} from './Components/index/Index'

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
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
