import React from "react";
import Search from "./search";
const Header = ({ name }) => {
  return (
    <>
      <div className="xl:px-32 px-16 md:flex flex-col justify-center ">
        <h1 className="lg:text-5xl sm:text-2xl">{name} </h1>
        <Search />
      </div>
    </>
  );
};
export default Header;
