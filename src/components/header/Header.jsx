import React from "react";
import Title from "./components/Title";
import Nav from "./components/Nav";

const Header = () => {
  return (
    <header className="w-full  border-b-2 border-black py-5 sticky top-0 bg-gray-50 shadow-md">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Title />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
