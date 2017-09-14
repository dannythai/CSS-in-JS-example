import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Header from './header';
import Loading from './loading';
import PageOne from 'bundle-loader?lazy!./page-one';
import PageTwo from './page-two';
import Bundle from './bundle';
import './app.scss';

const App = () => (
  <Router>
    <div className='app'>
      <div className='red'>
        <h2>Pages</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page1'>Page 1</Link></li>
          <li><Link to='/page2'>Page 2</Link></li>
        </ul>
      </div>
      <Route exact path='/' render={() => <div className='blue'>Home</div>} />
      <Route path='/page1' render={() => (
        <Bundle load={PageOne}>
          {(Comp) => (
            Comp ? <Comp /> : <Loading />
          )}
        </Bundle>
      )} />
      <Route path='/page2' render={() => <PageTwo />} />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
