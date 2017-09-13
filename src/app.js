import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './app.scss';

const App = () => {
  return (
    <div className='red'>
      Hello World!
      <Header />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
