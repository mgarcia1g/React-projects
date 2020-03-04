import React, { Component } from 'react';


class GainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activityLevel:'',
            weight:'',
            total:'',
            protein:'',
            fat:'',
          
           
        }
    }
    
  

    total(){
        console.log("Activity Level: ", this.state.activityLevel, "Weight: ", this.state.weight)
        this.setState({total: parseInt(this.state.activityLevel ) * parseInt(this.state.weight) + 300})
        console.log(this.state)  
    }

    protein(){
        this.setState({protein: parseInt(this.state.weight)})
      
    }

    fat(){
        this.setState({fat: parseInt(this.state.weight) * .30})
 
    }

    carb(){
       this.setState({carb: (parseInt(this.state.activityLevel) * parseInt(this.state.weight) - (parseInt(this.state.fat)*9) - (parseInt(this.state.protein)*4) )/ 4  })

    }
    



    render() {
        return (
            <form> 
                Activity Level: <br></br>
                14 (Desk job / workout 1-3 times per week (moderate exercise)) <br></br>
                15 (Desk job / workout 4-6 times per week (intense exercise/ HIT))<br></br>
                16 (Active job / workout 4-7 times per week (High intensity exercise))
                <br></br>
                <input type="number" class="button" min="14" max="16" id="activityLevel" placeholder="Activity Level" value={this.state.activityLevel} onChange={(eve)=>{this.setState({activityLevel: eve.target.value})}}/> <br></br>
                <input type="text" class="button"  id="weight" placeholder="Enter Weight in lbs" value={this.state.weight} onChange={(eve)=> {this.setState({weight: eve.target.value })}}/> <br></br>
                <button type="button" class="button" onClick={()=>{this.total();this.protein(); this.carb();this.fat();}} >Calculate</button> <br></br>
               
                <div class="macros">

    
                <div class="card">
                    <img src="images/gain.jpg" class="thumbsup"></img><br></br>
                <h3>Gain</h3>
         
                <div class="container">
                Total Cal:<input type="text" id="totalCal" placeholder="Total" Value={this.state.total}   />  <br></br>
                  Protein:<input type="text" id="protein" placeholder="Grams" Value={this.state.protein}   /><br></br>
                  Carbs: <input type="text" id="carb" placeholder="Grams" Value={this.state.carb}   /> <br></br>
                  Fats: <input type="text" id="fat" placeholder="Grams" Value={this.state.fat}   />
                </div>
                </div>
                </div>



             </form>
                
              


        );
    }



}
export default GainComponent;