import React from 'react';
import {FilterProps} from '../types/FiltersPlp.type';


const Filter: React.FC<FilterProps> = ({ title, options }) => {
  return (
    <div className="border p-5 mb-5"> 
      <h3 className="text-lg mb-3">{title}</h3> 
      {options.map((option, index) => (
        <label key={index} className="block mb-2">
          <input type="checkbox" className="mr-2" />
          {option.label} ({option.count})
        </label>
      ))}
    </div>
  );
};

export default Filter;
