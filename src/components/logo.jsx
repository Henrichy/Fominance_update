import React from "react";
import Logo from "./../assets/Used Logo.svg"
import { NavLink } from "react-router-dom";

function Logo () {
    return(
        <div>
            <NavLink>
                <img src={Logo} alt="Fominance Logo" />
            </NavLink>
        </div>
    );
};
export default Logo;