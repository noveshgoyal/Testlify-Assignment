import React from "react";

const NavSelect = ({ label, options = [] }) => {
  return (
    <>
      {/* <label for="dropdown">{label}</label> */}

      <select className="nav-dropdown" name="dropdown" id="dropdown" >
        <option value="" disabled selected>
          {label}
        </option>
        {options.map((opt, ind) => (
          <option key={opt?.value + ind} value={opt?.value}>
            {opt?.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default NavSelect;
