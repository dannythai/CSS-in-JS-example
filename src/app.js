import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Feature from './feature';

const App = () => {
  return (
    <div className='hello'>
      Hello World!
      <Header />
      <Feature />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
