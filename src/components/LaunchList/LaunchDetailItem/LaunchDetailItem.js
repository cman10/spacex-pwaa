import React from 'react';
import './LaunchDetailItem.css'

const LaunchDetailItem=({title,year,successLaunch,successLand,flightNum,missionId,unqKey})=>{
    return(
        <div>
        <div className="launch-detail type-list">
            <p className="detail-label">{title}#{flightNum}</p>
            <ul className="detail-value">
            {missionId.length? missionId.map(id=> <li key={id}>{id}</li>)
            :<li key={unqKey}>NA</li>}
            </ul>
            </div>
            <div className="launch-detail">
                <p className="detail-label">Year:</p><p className="detail-value">{year}</p>
            </div>

                <div className="launch-detail">
                <p className="detail-label">Successful Launch:</p><p className="detail-value">{successLaunch && successLaunch.toString()}</p>
                </div>

                <div className="launch-detail">
                    <p className="detail-label">Successful Landing:</p>
                    <p className="detail-value">{successLand && successLand.toString()}</p>
                </div>
                </div>
      
        
            )
}

export default LaunchDetailItem;