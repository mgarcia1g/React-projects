// Now export the above Map component into another component by passing the props values
import React, {Component} from 'react';
import Map from './Map';
class NewCompo extends Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: 39.9612, lng: -82.983330}}
       height='300px'
       zoom={15}
      />
        )
    }
  } 
  export default NewCompo;