import React from "react";
import { Link,useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css';



function Navbar() {
  
  let history = useHistory();

  function handleClick() {
    alertify.set('notifier','position', 'top-right');
    alertify.success('Logout Success', 1); 
    localStorage.setItem("isLogin",true)
      localStorage.removeItem("isLogin")
      history.push("/");
    
  }
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar"><Button onClick={handleClick} style={{color:"white",fontSize:"20px"}}><ExitToAppIcon style={{fontSize:"30px"}}/>Logout</Button></div>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="navbar-toggle" style={{ marginBottom: "50px" }}></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
