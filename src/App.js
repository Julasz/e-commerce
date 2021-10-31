import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import './Components/navbar/navbar.scss'
import './Components/items/item.scss'
import './Components/items/itemCount.scss'
import NavBar from './Components/navbar/NavBar';
import { ItemListContainer } from './Components/items/ItemListContainer';
import { Cart } from './Components/details/Cart';
import { ItemDetailsContainer } from './Components/details/ItemDetailsContainer';
// import { CarouselSlide } from './Components/index/CarouselSlide';




function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <CarouselSlide/> */}
          <Switch>
            <Route exact path='/'>
              <ItemListContainer/>
            </Route>
            <Route exact path='/categoria/:idCategoria' component={ItemListContainer}/>
            <Route exact path='/detalle' component={ItemDetailsContainer}/>
            <ItemDetailsContainer/>
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
