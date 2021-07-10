import React from "react";
import Navbar from "../components/Navbar";
import UploadFiles from "../components/UploadFiles";

function files() {

  if(localStorage.getItem("isLogin")==="success"){
  return (
    <div>
      <Navbar />
      <div className="files">
      <h3 style={{marginTop:"-200px",marginLeft:"-250px",marginBottom:"170px"}}>Files Add Show</h3>

      <div style={{marginLeft:"100px"}}><UploadFiles /> </div>
      </div>
    </div>
  );}
  else{
    return (
      <div>
        <Navbar />{" "}
        <div className="files"> 
        <h1>Unauthorized Access</h1>
        </div>
      </div>
    );
  }
}

export default files;
