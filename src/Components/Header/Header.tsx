import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
                <header>
                    <NavLink to={"/"} className="navlink">Cricket Rankings</NavLink>
                </header>
            </div>
        )
    }
}

export default Header