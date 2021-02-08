import React from 'react';
import './FilterLaunch.css';
import FilterCategory from './FilterCategories/FilterCategories'

const LaunchFilters=({filterData, onFilterApply})=>{

    return(
        <div className="filter-launch">
            <h1>Filters</h1>

            {filterData.map(categoryData=>  <FilterCategory categoryData={categoryData} key={categoryData.displayName} onFilterApply={onFilterApply}/>)}

        </div>


    )

}

export default LaunchFilters;