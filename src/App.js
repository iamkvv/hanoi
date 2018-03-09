import React, { Component } from 'react'
import Articles from './articles'
//import logo from './logo.svg'
import injectSheet from 'react-jss'
import './App.css'
import Accordion from './accordion'

//https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089
//https://icons8.ru/icon/4696/%D0%BF%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0
//https://github.com/kriasoft/react-starter-kit/issues/909#issuecomment-252969542

////!!  https://gridbyexample.com/patterns/
class App extends Component {
  constructor() {
    super();
    this.state = {
      module: null,
    }
  }

  componentDidMount() {
    this.getArticle("th_main")
  }


  getArticle = (e) => {
    let moduleName;
    if (typeof e === 'object') {
      moduleName = e.target.id.toLowerCase();
    } else {
      moduleName = e;
    }
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
    const { module: Module } = this.state;

    return (
      <div style={{width:'75%', margin:'0 auto', maxWidth: '850px'}}>
          {Module && <Module />}
      <div>

      </div>


        <div className="wrapper1">
          <header className="header">
            ХАНОЙСКАЯ БАШНЯ
        </header>


          {/* <aside class="sidebar">
          <Articles getArticle={this.getArticle}/>
        </aside> */}

          <article className="content">
            {/* {Module && <Module />}  */}
            
             {/*<-- {this.state.module && <this.state.module />}  */}
          </article>

          {/* <footer className="footer"> */}
            {/* <Accordion data={[
             {name:"1", caption:"Почему ханойская башня"},
             {name:"2", caption:"Accordion.jsx"},
             {name:"3", caption:"Accordion-item.jsx"}
           ]}/> */}
          {/* </footer> */}

        </div>
        <div className='wrapper2'>
          <div className='accord'>
            <Accordion data={[
              { name: "1", caption: "Почему ханойская башня" },
              { name: "2", caption: "Accordion.jsx" },
              { name: "3", caption: "Accordion-item.jsx" }
            ]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
