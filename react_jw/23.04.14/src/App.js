import React from 'react';

function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

function Input(props) {
  return (
    <input
      className="input"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

function SearchBox(props) {
  function handleInputChange(event) {
    props.onChange(event.target.value);
  }

  function handleButtonClick() {
    props.onSearch();
  }

  return (
    <div className="search-box">
      <Input
        placeholder="Search"
        value={props.value}
        onChange={handleInputChange}
      />
      <Button label="Search" onClick={handleButtonClick} />
    </div>
  );
}
export default SearchBox;