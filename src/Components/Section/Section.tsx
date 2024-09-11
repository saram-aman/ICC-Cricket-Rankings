import React from "react";
import { NavLink } from "react-router-dom";

class Section extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
                <h2>Format Rankings</h2>
                <div className="tabs">
                    <NavLink to={"/teams/"} className="tab active" data-target="test">Test Rankings</NavLink>
                    <NavLink to={"/teams/odi"} className="tab" data-target="odi">ODI Rankings</NavLink>
                    <NavLink to={"/teams/t20i"} className="tab" data-target="t20">T20 Rankings</NavLink>
                </div>
            </div>
        )
    }
}

export default Section