import React, { Component } from 'react';

import s from './Home.module.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={s.wrap}>
        <p>Home page!</p>
      </div>
    );
  }
}

export default Home;
