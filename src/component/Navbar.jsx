// import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import Navlinks from "./Navlinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

// const themes = {
//   winter: "winter",
//   dracula: "dracula",
// };

// const getThemeFromLocal = () => {
//   return localStorage.getItem("theme") || themes.winter;
// };

const Navbar = () => {
  // const [theme, setTheme] = useState(getThemeFromLocal());

  const dispatch = useDispatch();

  const handleTheme = () => {
    // const { winter, dracula } = themes;
    // const newTheme = theme === winter ? dracula : winter;
    // setTheme(newTheme);

    dispatch(toggleTheme());
  };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>

          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme setup */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun */}
            <BsSunFill className="swap-on w-4 h-4" />
            {/* moon */}
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>
          {/* cart link */}
          <NavLink to="/cart" className="btn btn-ghost btn-circul btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
