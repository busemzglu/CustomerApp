import { Button } from '@material-ui/core'
import React from 'react'
import { Link,useHistory } from "react-router-dom";


const PageNotFound = () => {
    let history = useHistory();

   function  goHome(){
        history.push("/home");
    }

    return (
        <div id="wrapper" style={{textAlign:"center"}}>
            <img src="https://i.imgur.com/qIufhof.png" height="400px"  />
            <div id="info">
                <h1>404</h1>
                <h3>This page could not be found</h3>
                <br/>
                <Button style={{backgroundColor:"green"}}><h5 style={{color:"white"}} onClick={goHome}>Go To Home</h5></Button>
            </div>
        </div >
    )
}

export default PageNotFound