import React from 'react';
import Select from 'react-select';

import './Dropdown.css';

// import file containing the lists of species, gender and homeworld
import { speciesList, gendersList, homeworldsList } from './docs/arrayList';

const Dropdown = ({ onFilterChange }) => {

   const makeOption = (x) => {
      let y = x.charAt(0).toUpperCase() + x.slice(1);
      return { value: x, label: y };
   };

   const handleInputChange = (values, option) => {
      if (values === undefined || values === null) {
         switch(option) {
            case "genders":
              values = gendersList.map(x => makeOption(x));
              break;
            case "species":
               values = speciesList.map(x => makeOption(x));
              break;
            case "homeworlds":
               values = homeworldsList.map(x => makeOption(x));
               break;
            default:
               console.log("ops, something went wrong on dropdown selection")
          }
      }
      onFilterChange(values, option);
    };

   return (
      <>
         <article className="dropdowns">
            <div className="dropdown">
               <p className="option-desc">Gender</p>
               <Select
                  defaultValue={gendersList.map(x => makeOption(x))}
                  isMulti
                  name="genders"
                  options={gendersList.map(x => makeOption(x))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(values)=>handleInputChange(values,"genders")}
                  label="genders"
                  />
            </div>
            <div className="dropdown">
               <p className="option-desc">Species</p>
               <Select
                  isMulti
                  defaultValue={{value: 'human', label: 'Human'}}
                  name="species"
                  options={speciesList.map(x => makeOption(x))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(values)=>handleInputChange(values,"species")}
                  />
            </div>
            <div className="dropdown">
               <p className="option-desc">Homeworld</p>
               <Select
                  isMulti
                  defaultValue={{value: 'tatooine', label: 'Tatooine'}}
                  name="homeworlds"
                  options={homeworldsList.map(x => makeOption(x))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(values)=>handleInputChange(values,"homeworlds")}
                  />
            </div>
         </article>
         <p className="dropdown-note">Note: remove all options to see everyone</p>
      </>
   )
};

export default Dropdown;
