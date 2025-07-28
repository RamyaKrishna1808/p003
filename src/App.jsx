import React, { Component } from 'react';
import './App.css';
class App extends Component {
  menuclick(){
   const navlist=document.getElementById("navlist");
   navlist.classList.toggle("active");
  }
  render() {
    return (
      <>
        <header>
          <nav> 
            <div className='logo'> My Website </div>
            <ul id="navlist">
              <li>Home</li>
              <li>about</li>
              <li>services</li>
              <li>contact</li>
            </ul>
            <div className='menu' onClick={()=>this.menuclick()}>&#9776;</div>
          </nav>
        </header>
        <section>
          <h1> Welcome To My website</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio explicabo, ea dolorem nulla, unde molestias assumenda, corporis odio quibusdam architecto eos magni laudantium animi fuga fugit at debitis? Perferendis!</p>
        </section>
        <footer> copyright @2025 All rights reserved</footer>
      </>
    );
  }
}

export default App;
