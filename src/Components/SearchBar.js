import React, { useState } from "react";

const SearchBar = (props)=> {
const [term, setTerm]=useState('');
 const onSubmitForm = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  };
  
    return (
      <div className="ui segment">
        <form onSubmit={onSubmitForm} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              value={term}
              onChange={(e) => {
                setTerm(e.target.value)
              }}
              type="text"
            ></input>
          </div>
        </form>
      </div>
    );
  }


export default SearchBar;
