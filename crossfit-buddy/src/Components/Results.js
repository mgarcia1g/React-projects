import react, {Component} from 'react';

class Results extends Component{
    render(){
        let{result}=this.props;
        return(
            <div className="results"> 
                <p>{result}</p>
            </div>
        )
    }
}