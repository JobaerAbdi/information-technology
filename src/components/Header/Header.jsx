import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg lg:px-12">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            Information Technology
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1 text-1xl font-bold">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Categories</a>
                </li>
                <li>
                  <a>Blogs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/500/300?random=3" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
