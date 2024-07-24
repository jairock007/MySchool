import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/students" component={Students} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;