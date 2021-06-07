import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Articles from './components/Articles';
import Pronouns from './components/Pronouns';
import Adjectives from './components/Adjectives';
import Prepositions from './components/Prepositions';

// const toggleStyle = {}
// const openToggle = {
//   transform: "translate3d(0, 0, 0)"
// }
// const closedToggle = {
//   transform: "translate3d(260px, 0, 0)"
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "dashboard",
      mobile: true,
      toggleOpen: false
    }
   this.resizeFunction = this.resizeFunction.bind(this);
  }

  changeRoute = (eventKey) => {
    console.log('new route:'+ eventKey)
    this.setState({
      route: eventKey,
    })
  }

  resizeFunction() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 991) {
      console.log('Bigger than 991');
      this.setState({
        mobile: false
      })
    }
    else {
      this.setState({
        mobile: true
      })
    }
  };
  
  handleDrawerToggle = () => {
    const element = document.getElementById("sidebar-drawer");
    console.log(element);
    element.classList.toggle('drawer-open');
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeFunction);
    this.resizeFunction();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  
  toggleDrawer = () => {

  }

  

  render() {
    
   
    return (
      <div className="App">
        <div className="wrapper"> 
             
          <Sidebar changeRoute={this.changeRoute} route={this.state.route} mobile={this.state.mobile} handleDrawerToggle={this.handleDrawerToggle} />
          <div className="main-panel">
            <Container fluid>
            {
              this.state.mobile 
              ? <div id="hamburger"><i className={this.state.toggleOpen ? "fas fa-times" : "fas fa-bars"} onClick={this.handleDrawerToggle}></i></div>
              : ''
            }
              {
                this.state.route === "dashboard" 
                ? <Dashboard /> 
                : (this.state.route === "articles" 
                  ? <Articles /> 
                  : (this.state.route ==="pronouns"
                    ? <Pronouns />
                    : (this.state.route === "adjectives"
                      ? <Adjectives /> 
                      : <Prepositions />)))
              }
            </Container>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
