import React from "react";
import "./dashboard.css";
import Logo from "../../Assets/M&C Logo blue.png";
import Search from "../../Assets/Rectangle 2.png";
import LogoSearch from "../../Assets/Vector.png";
import Logout from "../../Assets/Logout.png";
import Arrow from "../../Assets/Vector (2).png";
import SideBar from "../../Assets/Vector (1).png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="logo">
        <div className="logo-image">
          <img src={Logo} alt="Logo M&C" />
        </div>
      </div>

      <div className="search">
        <div className="search-image">
          <form>
            <img src={Search} alt="search page" />
            <input
              type="text"
              className="search-text"
              placeholder="Search anything here..."
            />
            <img src={LogoSearch} alt="gambar" className="search-icon" />
            <img src={Logout} alt="gambar" className="logout" />
            <img src={Arrow} alt="gambar" className="arrow" />
            <img src={SideBar} alt="gambar" className="sidebar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
