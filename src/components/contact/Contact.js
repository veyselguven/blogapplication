import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Adress from "../../img/address.png";

export default function Contact() {
  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +1 650 4850316
                <img src={Email} alt="" className="c-icon" />
                vgbasbaydar@gmail.com
                <img src={Adress} alt="" className="c-icon" />
                820 Clinton St, Redwood Cit, CA , 94061
              </div>
            </div>
          </div>
          <div className="c-right">right</div>
        </div>
      </div>
    </div>
  );
}
