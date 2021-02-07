import React from 'react';
import LaunchImage from  '../LaunchImageItem/LaunchImageItem';
import LaunchDetailItem from '../LaunchDetailItem/LaunchDetailItem'
import './LaunchCardItem.css';


const LaunchCardItem=({launchData})=>{

    return(
        <div className="launch-item">
            <LaunchImage source={launchData.links.mission_patch_small} name={launchData.mission_name}/>
            <p className="launch-name">{}</p>
            <LaunchDetailItem title={launchData.mission_name} 
            year={launchData.launch_year} 
            successLaunch={launchData.launch_success}  
            successLand={true} 
            flightNum={launchData.flight_number}
            missionId={launchData.mission_id}
            unqKey={launchData.launch_window}
            />
          
             </div>


    )

}

export default LaunchCardItem;