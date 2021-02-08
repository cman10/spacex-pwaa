import React from 'react';
import FilterCategory from '../FilterCategories/FilterCategories';
import './FilterItem.css';

const FilterItem=({value,isActive, onItemClick})=>{

    const handleClick=()=>{
            onItemClick(value)
    }

    return (
        <div>
            <button className={"filter-item"+( isActive ? " active":"")}  onClick={handleClick}
            >{value}</button>
        </div>
    )
}

export default FilterItem;