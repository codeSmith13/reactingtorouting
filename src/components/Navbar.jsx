import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" navBar container d-flex mt-3">
        <div className="link-group">
          <Link to="/">
            <img
              className="logo"
              src="https://tinyurl.com/3jc4xu5a"
              alt="logo"
            />
          </Link>
          <Link to="/films">
            <button className="btn btn-warning m-2">Films</button>
          </Link>
          <Link to="/people">
            <button className="btn btn-warning m-2">People</button>
          </Link>
        </div>
      </div>
     
    </>
  );
}

export default Navbar;
