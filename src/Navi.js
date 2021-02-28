import React from "react";

const Navi = ({takeInputFromForm}) => {
  return (
    <div>
      <header>
        <form id="form" onSubmit={(e)=>takeInputFromForm(e)}>
          <input type="text" id="search" className="search" placeholder="Search" name="search"/>
        </form>
      </header>
    </div>
  );
};

export default Navi;
