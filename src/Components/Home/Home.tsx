import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div className="homepage">
                <div className="home">
                    <h1 className="main-heading">What would you like to explore?</h1>
                    <div className="buttons">
                        <NavLink to={"/teams"} className="button">Teams Ranking</NavLink>
                        <NavLink to={"/players"} className="button">Players Ranking</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home