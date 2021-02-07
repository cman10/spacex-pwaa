import React from 'react';
import './FilterCategory.css'
import FilterItem from '../FilterItem/FilterItem';

const FilterCategory=({categoryData})=>{
return(
    <div>
    <section className="filter-category">
    <h3 className="filter-type">{categoryData.displayName}</h3>
        <div className="filter-values">
      
        {categoryData.data.map(filterData=> <FilterItem value={filterData}
         isActive={filterData===categoryData.activeItem}/>)}

        </div>
        </section>
    </div>


)
}

export default FilterCategory;