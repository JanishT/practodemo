// import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import Vedioconsultant from "./Vedioconsultant";
import Popup from "reactjs-popup";
import Labtests from "./Labtests";

const Navbar = () => {
//   const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
    <div className="Navbar">
      <Link to={"/"}>
      <img className="practo_logo"
        src="https://www.practo.com/nav/9.5.15/consumer/images/practo.svg"
        alt=""
      />
</Link>
      <div className="Nav_Route_link">
        <Link className="find"  to={"/Finddoctor"}>Find doctors</Link>
        <Link className="find" to={"/video"}>Video Consult</Link>
        <Link className="find" to={"/medicines"} >Medicines</Link>




        {/* <Link className="find" onClick={() => setButtonPopup(true)} to={"/"} >Lab Tests</Link> */}
        <Popup 
          trigger={
            <Link className="find" to={"/Labtest"}>
              Labtest{" "}
            </Link>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal1">
              <div className="content">
                <span className="city">Select a City</span>
                <div>
                  <input
                    type="text"
                    list="places"
                    placeholder="Please Select"
                  />
                  <datalist id="places">
                    <option value="Bengaluru"></option>
                    <option value="Delhi"></option>
                    <option value="Chennai"></option>
                    <option value="Mumbai"></option>
                    <option value="Kerala"></option>
                    <option value="Kolkata"></option>
                  </datalist>
                </div>

                <span className="top_cities">Top Cities</span>
                <div className="places_set_aakan_ullath">
                  <div className="one_img_pl">
                <img src="https://www.practo.com/tests/public/icons/topcities/Bangalore.svg?1556796588" alt="" />
                <span>Bangalore</span>
</div>
<div className="one_img_pl">
                <img src="https://www.practo.com/tests/public/icons/topcities/Delhi.svg?1556796588" alt="" />
                <span>Delhi</span>
</div>
<div className="one_img_pl">
                <img src="https://www.practo.com/tests/public/icons/topcities/Mumbai.svg?1556796588" alt="" />
                <span>Mumbai</span></div>

                <div className="one_img_pl">
                <img src="https://www.practo.com/tests/public/icons/topcities/Chennai.svg?1556796588" alt="" />
                <span>Chennai</span></div>

                <div className="one_img_pl">
                <img src="https://www.practo.com/tests/public/icons/topcities/Hyderabad.svg?1556796588" alt="" />
                <span>Hyderabad</span></div>

                <div className="one_img_pl">
                <img src="https://www.practo.com/tests/public/icons/topcities/Pune.svg?1556796588" alt="" />
                <span>Pune</span>
</div>
                </div>
              </div>
              <span>ALL CITIES</span>
             <span>Bangalore Chennai Delhi Gurugram</span> 
             <span>Hyderabad MumbaiNavi Mumbai Noida Pune Thane</span>
            </div>
          )}
        </Popup>






        <Link className="find">Surgeries</Link>
      </div>
<div className="all_nav_boot">
      <nav class="navbar navbar-expand-lg navbar-dark bg-white ">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nnn  dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Corporates
                </Link>
                <ul class="dropdown-menu dropdown-menu-white">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Health & Wellness Plans
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Group Insurance
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>




            
  





          </div>
        </div>

      </nav>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-white">
          <div className="container-fluid">
           
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nnn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    For Providers
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-white">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Practo Prime
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                       software for providers
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                       List your practice for free
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                       ABDM
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
          <div className="container-fluid">
           
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nnn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Security & help
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-white">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Data security
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                       Help
                      </Link>
                    </li>
                    
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
<button className="nav_button">Login/Signup</button>
        </div>

      

      
    </div>
    <Outlet />
    </div>
  );
};

export default Navbar;
