import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './Components/navbar/NavBar';
import { ItemListContainer } from './Components/items/ItemListContainer';
import { ItemDetailsContainer } from './Components/details/ItemDetailsContainer';
import {Cart} from './Components/cart/Cart'
import './App.css';
import './Components/navbar/navbar.scss'
import './Components/items/itemCount.scss'
import './Components/details/itemDetail.scss'
import { Contacto } from './Components/index/Contacto';
// import { CarouselSlide } from './Components/index/CarouselSlide';




function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <CarouselSlide/> */}
          <Switch>
            <Route exact path='/'><ItemListContainer/></Route>
            <Route exact path='/categoria/:id' component={ItemListContainer}/>
            <Route exact path='/productos/:id' component={ItemDetailsContainer}/>
            <Route exact path='/cart'>{Cart}</Route>
            <Route exact path='/contacto'>{Contacto}</Route>
          </Switch>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
