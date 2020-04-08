import React, { Component } from 'react';
import './App.css';
import Questions from './Components/QuestionComponent';
import Banner from './Components/Banner';
import GainComponent from './Components/GainComponent';
import DeficitComponent from './Components/DeficitComponent';
import NewMap from './Components/NewMap';



class App extends Component {
 /////////////maintain
 maintainHandleShow = () => {
  this.setState({ maintainActive: true });
};

maintainHandleHide = () => {
  this.setState({ maintainActive: false });
};



 //////////// gain
state = {
  gainActive: false
};

gainHandleShow = () => {
  this.setState({ gainActive: true });
};

gainHandleHide = () => {
  this.setState({ gainActive: false });
};

 ////////////deficit
  state = {
    deficitActive: false
  };

  deficitHandleShow = () => {
    this.setState({ deficitActive: true });
  };

  deficitHandleHide = () => {
    this.setState({ deficitActive: false });
  };

  

  render() {

    return (

      <div className="App">
        <Banner></Banner>
        <div id="macroCalculator">
          <h1> Macro Calculator </h1>
        </div>

        <h2>Macros Matter</h2>
        <div class="macros">
      
      
    </div>
    
    <button class="containerr" id="btn1" onClick={this.gainHandleShow}>Gain Weight</button>
    <button onClick={this.gainHandleHide}>Close</button>

      <div class="gain">
    {this.state.gainActive && <GainComponent></GainComponent> }
    </div>
       
    <button class="containerr" id="btn2" onClick={this.deficitHandleShow}>Lose Weight</button>
    <button onClick={this.deficitHandleHide}>Close</button>

    <div class="deficit">
    {this.state.deficitActive && <DeficitComponent></DeficitComponent> }
    
    </div>

    <button class="containerr" id="btn3" onClick={this.maintainHandleShow}>Maintain Weight</button>
    <button onClick={this.maintainHandleHide}>Close</button>

    <div class="maintain">
    {this.state.maintainActive && <Questions></Questions> }
    
    </div>
    <div class="googlemaps" >
      <NewMap></NewMap>
    </div>
      
        



      </div>

      

    );
  }
}

export default App;
