import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <header className="header">
          <h1 className="title">Who to follow</h1>
          <button type="button" class="btn btn-primary">Refresh</button>
        </header>
        <section className="content-data">
          <div className="card">
            <img src="" alt="" className="avatar"/>
            <h3 className="name">Ocean</h3>
            <h4 className="username">@ahmad</h4>
            <button className="btn-x">x</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
