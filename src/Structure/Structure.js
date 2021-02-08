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
            activeItem:""
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
        flightdata:null,
        queryString:"",
    }


    async componentDidMount() {
       const url="https://api.spacexdata.com/v3/launches?limit=100"
        const response= await fetch(url);
        const data= await response.json();
        this.setState({flightdata:data,loading:false});
        
    }

    async componentDidUpdate() {
        let queryString = this.state.filterData.reduce((query,category)=>{
            if(category.activeItem){
               query+= `&${category.type}=${category.activeItem}`
            }
            return query
        },"")
        if(this.state.queryString !== queryString){
            const url="https://api.spacexdata.com/v3/launches?limit=100"+queryString;
            const response= await fetch(url);
            const data= await response.json();
            this.setState({flightdata:data,loading:false,queryString:queryString});
        }
    }

    onFilterApply = (type,value)=>{
        const modifiedCategory= this.state.filterData.filter(category=>category.type===type)[0]
        modifiedCategory.activeItem = value;

        this.setState((oldState)=>{
            return {
                filterData: oldState.filterData.map(category=> category.type===type? modifiedCategory : category)
            }
        })

    }

    render(){  
        
    return(
        <>
            <Header/>
        {
            <main className="main-container">
                <LaunchFilters onFilterApply={this.onFilterApply} filterData={this.state.filterData} />
                <LaunchListItem loading={this.state.loading} flightdata={this.state.flightdata}/>
            </main>
        }
            <Footer/>
        </>
       )
    }
   }

   export default Structure