import React, { Component } from 'react';




class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activityLevel: '',
            weight: '',
            total: '',
            protein: '',
            fat: '',
            carb: '',
            totalGain: ''

        }
    }
    state = {
        isActive: false
    };

    handleShow = () => {
        this.setState({ isActive: true });
    };

    handleHide = () => {
        this.setState({ isActive: false });
    };



    total() {
        console.log("Activity Level: ", this.state.activityLevel, "Weight: ", this.state.weight)
        this.setState({ total: parseInt(this.state.activityLevel) * parseInt(this.state.weight) })
        console.log(this.state)
    }

    protein() {
        this.setState({ protein: parseInt(this.state.weight) })

    }

    fat() {
        this.setState({ fat: parseInt(this.state.weight) * .30 })

    }

    carb() {
        this.setState({ carb: (parseInt(this.state.activityLevel) * parseInt(this.state.weight) - (parseInt(this.state.fat) * 9) - (parseInt(this.state.protein) * 4)) / 4 })

    }

    render() {
        return (

            <form>
                {/* <div class="gain">
                    {this.state.isActive && document.getElementById("content")}

                    <button onClick={this.handleShow}>Show</button>
                    <button onClick={this.handleHide}>Hide</button>
                </div> */}


                <div id="content">

                Activity Level: <br></br>
                14 (Desk job / workout 1-3 times per week (moderate exercise)) <br></br>
                15 (Desk job / workout 4-6 times per week (intense exercise/ HIT))<br></br>
                16 (Active job / workout 4-7 times per week (High intensity exercise))
                <br></br>
                <input type="number" min="14" max="16" class="button" id="activityLevel" placeholder="Activity Level" value={this.state.activityLevel} onChange={(eve) => { this.setState({ activityLevel: eve.target.value }) }} /> <br></br>
                <input type="text" id="weight" class="button" placeholder="Enter Weight in lbs" value={this.state.weight} onChange={(eve) => { this.setState({ weight: eve.target.value }) }} /> <br></br>
                <button type="button" class="button" onClick={() => { this.total(); this.protein(); this.carb(); this.fat(); }} >Calculate</button> <br></br>

                <div class="macros">


                    <div class="card">
                        <img src="images/maintain.jpg" class="thumbsup"></img>
                        <h3>Level</h3>
                        <div class="container">
                            Total Cal:<input type="text" id="totalCal2" placeholder="Total" Value={this.state.total} />  <br></br>
                            Protein:<input type="text" id="protein2" placeholder="Grams" Value={this.state.protein} /><br></br>
                            Carbs:<input type="text" id="carb2" placeholder="Grams" Value={this.state.carb} /> <br></br>
                            Fats:<input type="text" id="fat2" placeholder="Grams" Value={this.state.fat} />
                        </div>
                    </div>


                </div>

                </div>



            </form>




        );
    }



}
export default Questions;







