import React from "react";
class Home extends React.Component{
    render() {
        return(
            <>
            <div className="grid-container1">
            <div className="resturanttext">
                <h1>TEGS PIZZERIA & GRILL</h1>
                <h2>090 - 13 20 15</h2>
                <h3>UMEÅ</h3>
            </div>
            <div className="woltlogo">
                <img className="woltlogo" src="/Wolt_icon_blue.png" alt="logga för wolt"/>
            </div>
            <div className="menubutton">
                <div className="buttoncontainer">
                    <a href="index3.html" style={{textDecoration:'none'}}>
                        <p>MENY</p>
                    </a>
                </div>
            </div>
            <div className="foodoralogo">
                <img className="foodoralogo" src="/foodora.jpg" alt="logga för foodora"/>
            </div>
            <div className="dagenslunch">
                <h1 className="dl-text" id="dlTxt">DAGENS LUNCH 11:00 - 14:00</h1>
                <p id="btnText">Välj valfri rätt från hela menyn.</p>
                <p>Dryck, kaffe, bröd & smör ingår!</p>
                <button id="myBtn" type="button">Svårt att välja?</button>
            </div>
            <div className="dagenspris">
                <div className="dagenscontainer">
                    <h1>90 Kr!</h1>
                </div>
            </div>
            <script type = "text/javascript" src = "script.js"></script>
        </div>
        </>
        );
    }
}


export default Home;