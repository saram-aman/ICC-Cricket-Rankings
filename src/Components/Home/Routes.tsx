import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import TestTeams from "../Home/Test/Teams/Teams";
import ODITeams from "../Home/ODI/Teams/Teams";
import T20ITeams from "../Home/T20I/Teams/Teams";

class Pages extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
                <Header />
                <div className="container">
                    <Section />
                    
                    {/* Routes for Teams and Players within Pages */}
                    <Routes>
                        <Route path="/teams" element={<TestTeams />} />
                        <Route path="/teams/odi" element={<ODITeams />} />
                        <Route path="/teams/t20i" element={<T20ITeams />} />
                        <Route path="/players" element={<TestTeams />} />
                        <Route path="/players/odi" element={<TestTeams />} />
                        <Route path="/players/t20i" element={<TestTeams />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Pages;
