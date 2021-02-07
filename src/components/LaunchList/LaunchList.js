import React from 'react';
import './LaunchList.css';
import '../LaunchList/LaunchCardItem/LaunchCardItem'
import LaunchCardItem from '../LaunchList/LaunchCardItem/LaunchCardItem'
import Spinner from '../UI/Spinner/Spinner'



class LaunchListItem extends React.Component{


    render(){
        console.log(this.props.flightdata);
    return(
    <div>{this.props.loading || !this.props.flightdata? (<Spinner/>)
        :
        (
        <div className="launch-list">       
            {this.props.flightdata.map(data=>  <LaunchCardItem key={data.flight_number} launchData={data}/>)}
           
            </div>)
            
            }
            
    </div>


    )
    }
}

export default LaunchListItem;