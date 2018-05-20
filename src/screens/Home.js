import React, { Component } from 'react';
import Logo from '../img/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="container home flex column center">
        <img src={Logo} alt="React logo"/>
        <h1>React.js Boilerplate</h1>
        <h2>Ready to work</h2>
        <p>SASS + Router v4 configuration</p>
        <ul>
          <li><span>npm start</span> : to run React and SASS sequentially</li>
          <li><span>npm run build</span> : to build project with SASS to CSS</li>
          <li><span>npm run deploy</span> : to publish on github gh-pages</li>
        </ul>
      </div>
    );
  }
}

export default Home;