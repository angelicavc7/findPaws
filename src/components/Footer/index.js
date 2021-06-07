import React from "react";
import "antd/dist/antd.css";
import "./style.css"


function Footer() {
  return (
    <div className = "main-footer">
        <div className="container">
            <div className="row">

                {/* Column1 */}
                <div className="col">
                    <h4>FIND PAWS INC.</h4>
                </div>
            
             </div>
                <hr / >
                <div className="row">
                   <p className="col-sm">
                        &copy;{new Date().getFullYear()} FINDPAWS INC | All rights reserved | Terms of Service | Privacy
                   </p>
               </div>
        </div>
    </div>
  );
}

export default Footer;


