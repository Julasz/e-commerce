import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './Components/navbar/NavBar';
import {ItemListContainer} from './Components/ItemListContainter/ItemListContainer';
import {ItemDetailsContainer} from './Components/ItemDetailContainer/ItemDetailsContainer';
import {Contacto} from './Components/index/Contacto';
import './App.css';
import { Index } from './Components/index/Index';
import CartContextProvider from './context/CartContext';
import Cart from './Components/cart/Cart';



function App() {
  return (
  
      <div>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/'><Index/></Route>  
              <Route exact path='/categoria/:id' component={ItemListContainer}/>
              <Route exact path='/productos/:productId' component={ItemDetailsContainer}/>
              <Route exact path='/cart'>{Cart}</Route>
              <Route exact path='/contacto'>{Contacto}</Route>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
        
      </div>
  
  );
}

export default App;
