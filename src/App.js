import React from 'react';
import { Container } from 'reactstrap';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Search from './Search';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/search' component={Search}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
