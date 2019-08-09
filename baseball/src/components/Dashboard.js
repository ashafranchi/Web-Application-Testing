import React from "react";

function Dashboard(props) {
    console.log(props);
    return (
        <div>
        <h3>Hits:{props.hits}</h3>
        <h3>Strikes:{props.strikes}</h3>
        <h3>Balls:{props.balls}</h3>
        <h3>Fouls:{props.fouls}</h3>
        </div>
    )
}

export default Dashboard;