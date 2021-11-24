import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/index';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Pricing from './pages/Pricing';
import Footer from './components/Footer/index';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/delta" exact component={Home}/>
        <Route path="/delta/signup" component={SignUp}/>
        <Route path="/delta/pricing" component={Pricing}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
