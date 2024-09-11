import React from "react";

class TestTeams extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div>
                <div id="test" className="rankings active">
                    <table className="ranking-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Australia</td>
                                <td>123</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>India</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>England</td>
                                <td>115</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TestTeams