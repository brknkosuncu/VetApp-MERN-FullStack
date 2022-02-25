import React from "react";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    margin: "-50px",
    height: "2.5rem",
    width: "40rem",
    background: "#F8F8FF",
    border: "none",
    padding: "0.5rem",
    margin: "25px 50px 25px 10px",
  };

  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Nasıl Yapılır?"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
