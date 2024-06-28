import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <header className="container ">
      <div>
        <h1 className="text-white font-extrabold text-4xl">
          <Link to="/">
            Gam<span className="text-red-600">erz</span>
          </Link>
        </h1>
      </div>

      <div className="mt-[10rem] text-center flex justify-center flex-col text-white">
        <h1 className="font-bold text-5xl">
          Connect With Gam<span className="text-red-600">erz</span>
        </h1>
        <p className="mt-2 text-xl font-bold">All Over The World</p>
        <div className="mt-2">
          {userInfo ? (
            <Link to="/explore">
              <Button className="bg-transparent border font-bold">
                Explore The World Of Gam
                <span className="text-red-600">erz</span>
              </Button>
            </Link>
          ) : (
            <div className=" space-x-2 ">
              <Link to="/register">
                <Button className="font-bold bg-slate-800">Register</Button>
              </Link>
              <Link to="/login">
                <Button className="font-bold bg-slate-800">Login</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
