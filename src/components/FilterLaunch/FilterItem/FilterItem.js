import React from 'react';
import './FilterItem.css';

const FilterItem=({value,isActive})=>{
    return (
        <div>
            <button className={"filter-item"+( isActive ? " active":"")} 
            >{value}</button>
        </div>
    )
}

export default FilterItem;