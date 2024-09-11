import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Pages from "./Components/Home/Routes"; // Updated to import Pages

class App extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teams/*" element={<Pages />} />
                    <Route path="/players/*" element={<Pages />} />
                </Routes>
            </div>
        );
    }
}

export default App;
