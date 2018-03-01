import React, { Component } from 'react'
import Articles from './articles'

//import { css } from 'emotion'
import logo from './logo.svg'
// import jss from 'jss'

import injectSheet from 'react-jss'
import './App.css'


// import {
//   Card,
//   Box,
//   BackgroundImage,
//   Subhead,
//   Small
// } from 'rebass'


////!!  https://gridbyexample.com/patterns/
class App extends Component {
  constructor(){
    super();
    this.state={
      module: null,
      data: [{id:1,name:'aaa'},{id:2,name:'bb'}]
     }
  }
  getArticle = (e) => {
    const moduleName = e.target.id.toLowerCase()
    import(`./arts/${moduleName}`)
      .then(({ ...module }) => {
        this.setState({ module: module.default });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //////////

  render() {
    const {module:Module}= this.state;

    return (
      <div className="wrapper1">
        <header class="header">
          <div style={{backgroundColor:'#faffaa', margin:'auto 10'}}>
              asdfg
          </div>
        
        </header>


        <aside class="sidebar">
        Sidebar
          <Articles getArticle={this.getArticle}/>
        </aside>
        <article class="content">
          <hr />
          {Module && <Module />}  {/*<-- {this.state.module && <this.state.module />}  */}
          <hr />

        </article>
        <aside class="rightbar">
        
        Правый Sidebar
        <svg width='14' height='11' viewBox='0 0 14 11'>
            <title>
              switch-check
          </title>
            <path d='M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0' fill='#fff' fillRule='evenodd' />
          </svg>
        
        
        </aside>
        <footer class="footer">My footer</footer>
      </div>
    );
  }
}

export default App;
