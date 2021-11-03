import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './Components/navbar/NavBar';
import {ItemListContainer} from './Components/ItemListContainter/ItemListContainer';
import {ItemDetailsContainer} from './Components/ItemDetailContainer/ItemDetailsContainer';
import {Cart} from './Components/cart/Cart'
import {Contacto} from './Components/index/Contacto';
import './App.css';
import { Index } from './Components/index/Index';


function App() {
  return (
    <>
      <div>
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

      </div>
    </>
  );
}

export default App;
