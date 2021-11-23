import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/index';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Pricing from './pages/Pricing';
import Footer from './components/Footer/index';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact children={<Home/>}/>
        <Route path="/signup" children={<SignUp/>}/>
        <Route path="/pricing" children={<Pricing/>}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
