import React, { Component } from 'react'
import Articles from './articles'
//import logo from './logo.svg'
import injectSheet from 'react-jss'
import './App.css'
//import Accordion from './accordion'

//https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089
//https://icons8.ru/icon/4696/%D0%BF%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0
//https://github.com/kriasoft/react-starter-kit/issues/909#issuecomment-252969542

////!!  https://gridbyexample.com/patterns/
class App extends Component {
  constructor() {
    super();
    this.state = {
      module1: null,
      module2: null,
    }
  }

  componentDidMount() {
    this.getTower("th_main");
    this.getAccord("accordion");
  }


  getTower = (e) => {
    let moduleName;
    if (typeof e === 'object') {
      moduleName = e.target.id.toLowerCase();
    } else {
      moduleName = e;
    }
    import(`./arts/${moduleName}`)
      .then(({ ...module }) => {
        this.setState({ module1: module.default });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAccord = (e) => {
    let moduleName;
    if (typeof e === 'object') {
      moduleName = e.target.id.toLowerCase();
    } else {
      moduleName = e;
    }
    import(`./${moduleName}`)
      .then(({ ...module }) => {
        this.setState({ module2: module.default });
      })
      .catch(err => {
        console.log(err);
      });
  }


  //////////

  render() {
    const { module1: Module } = this.state;
    const { module2: Module2 } = this.state;

    return (
      <div>
      <div style={{width:'75%', margin:'30px auto', maxWidth: '850px'}}>
          {Module && <Module />}
      </div>



        {/* <div className="wrapper1"> */}

          {/* <aside class="sidebar">
          <Articles getArticle={this.getArticle}/>
        </aside> */}

          {/* <article className="content"> */}
            {/* {Module && <Module />}  */}  
            {/*<-- {this.state.module && <this.state.module />}  */}
          {/* </article> */}

        {/* </div> */}


        <div style={{width:'75%', margin:'0 auto 30px auto', maxWidth: '650px'}}>
            {/* <Accordion data={[
              { name: "1", caption: "Почему ханойская башня" },
              { name: "2", caption: "Accordion.jsx" },
              { name: "3", caption: "Accordion-item.jsx" }
            ]} /> */}

 {Module2 && <Module2  data={[
              { name: "1", caption: "Почему ханойская башня" },
              { name: "2", caption: "Accordion.jsx" },
              { name: "3", caption: "Accordion-item.jsx" }
            ]} />}

        </div>

      </div>
    );
  }
}

export default App;
