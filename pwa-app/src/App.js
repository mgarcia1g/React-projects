import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import CardComponent from './components/Cards/CardComponent';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
    
  };
  backdropClickHandler = () => {
   this.setState({sideDrawerOpen: false});
 };


  render() {
    let sideDrawer;
    let backdrop;
    
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer></SideDrawer>;
      backdrop = <BackDrop click={this.backdropClickHandler} />
    }
  
  return (
    <div style={{height: '100%'}}>
      <NavBar drawerClickHandler={this.drawerToggleClickHandler}></NavBar>
      <CardComponent/>
      {sideDrawer}
      {backdrop}
      <main style={{marginTop: '65px'}}>
      
      </main>
    
    </div>
  );
  }
}

export default App;
