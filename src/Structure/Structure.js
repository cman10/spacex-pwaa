import React from 'react';
import Header from '../components/NavigationComp/Header/Header'
import Footer from '../components/NavigationComp/Footer/Footer'
import './Structure.css'
import LaunchFilters from '../components/FilterLaunch/FilterLaunch';
import LaunchListItem from '../components/LaunchList/LaunchList';


class Structure extends React.Component{
    state = {
        filterData: [{
            type: "launch_year",
            displayName: "Launch Year",
            data: new Array((new Date().getFullYear() - 2005)).fill().map((a, i) => 2006 + i),
            activeItem:2006
        },
        {
            type: "launch_success",
            displayName: "Successful Launch",
            data: ["true", "false"],
            activeItem:""
        },
        {
            type: "land_success",
            displayName: "Successful Landing",
            data: ["true", "false"],
            activeItem:""
        }],
        // queryString: setParam(this.props.query),
        loading: true,
        flightdata:null
    }


    async componentDidMount() {
       const url="https://api.spacexdata.com/v3/launches?limit=100"
        const response= await fetch(url);
        const data= await response.json();
        this.setState({flightdata:data,loading:false});
        
    }

    render(){   
    return(
        <>
            <Header/>
        {
            <main className="main-container">
                <LaunchFilters filterData={this.state.filterData}/>
                <LaunchListItem loading={this.state.loading} flightdata={this.state.flightdata}/>
            </main>
        }
            <Footer/>
        </>
       )
    }
   }

   export default Structure