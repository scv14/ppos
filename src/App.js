import React from 'react';
import Main from './page/main/main'
import Document from './page/document/document'
import About from './page/about/about'
import Contact from './page/contact/contact'
import Structure from './page/structure/structure'
import Presidents from './page/president/president'
import Commission from './page/commission/commission'
import University from './page/university/university'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logo from './page/component/header/logo.svg'
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navigation">
          <nav className="header__navigation">
            <a href="/">
              <img src={Logo} className="logo__navigation" />
            </a>
            <ul className="header__list">
              <li className="header__list__item"><a href="/">Главная</a></li>
              <li className="header__list__item"><a href="/structure">Структура</a></li>
              <li className="header__list__item"><a href="/about">О профсоюзе</a></li>
              <li className="header__list__item"><a href="/document">Документы</a></li>
              <li className="header__list__item"><a href="/contact">Контакты</a></li>
            </ul>
          </nav>
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/document" component={Document}></Route>
            <Route exact path="/structure" component={Structure}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/structure/president" component={Presidents}></Route>
            <Route exact path="/structure/commission" component={Commission}></Route>
            <Route exact path="/structure/university" component={University}></Route>
          </Switch>
        </main>
      </Router>
      <footer>
        <div className="footer">
          <section className="footer__inside inside">
            <h3>footer</h3>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;
