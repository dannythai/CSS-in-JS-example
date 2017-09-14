import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loading from './loading';

// bundle-loader package wraps the component - setting it as a lazy loaded component
import PageOne from 'bundle-loader?lazy!./page-one';

import PageTwo from './page-two';
import Bundle from './bundle';
import './app.scss';

/*
  Two things that this example shows:
    1. Code splitting with react router v4 (see react-router-dom docs)
    2. CSS is bundled with each component bundle and is requested dynamically
*/

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
      {/*
        Evidence of dynamic CSS bundling:
        The styles for "blue" will not be applied on loading the home page.
        Only when the page-one component bundle is loaded will the scss file for "blue" class
        be applied to the home page

        Steps:
          Load home page (open app at '/')
          Notice 'Home' text is black, div has class 'blue'
          Click on page 1 link, notice that page-one text is blue (css is loaded)
          Press Back button to go to '/'
          Now that css was loaded, home text is blue instead of black
      */}
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
