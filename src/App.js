import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from '../src/Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Kategoriaa from './Components/Kategoria/Kategoriaa';
import Tesh from './Components/Kategoria/Tesh/Tesh'
import Main from './Components/Main/Main'
import Reviews from './Components/Reviews/Reviews'
import Basket from './Components/Basket/Basket'



export const App = () => {
  
  return (
    <div>
      <Header />
      <Router>
        <Switch>
      

        <Route exact path='/' component={Home} />
        <Route exact path='/bag' component={Basket} />
        <Route exact path='/oplata' component={Main}/>
        <Route exact path='/otzyv' component={Reviews}/>
        <Route exact path='/kater' component={Tesh} />
        <Route exact path='/f' component={Tesh}/>
        <Route exact path='/r' component={Kategoriaa}/>
        <Route exact path='/p' component={Kategoriaa}/>
        <Route exact path='/y' component={Kategoriaa}/>
        <Route exact path='/d' component={Kategoriaa}/>
        <Route exact path='/sh' component={Kategoriaa}/>
        <Route exact path='/b' component={Kategoriaa}/>
        <Route exact path='/ts' component={Kategoriaa}/>
        <Route exact path='/k' component={Kategoriaa}/>
        <Route exact path='/kp' component={Kategoriaa}/>

        </Switch>
      </Router>
     

      <Footer />
    </div>
  );
};

export default App;