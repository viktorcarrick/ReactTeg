import React from "react";

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
            <div className="col1">
                <p>TEGS PIZZERIA & GRILL </p>    
                <p>090 - 13  20 15 </p>
                <p>Bryggargatan 46, Umeå</p>   
            </div>
            <div className="logocol">
                <img src="/TegsPizzeria.png" alt="Tegs pizzeria logga"/>
            </div>
            <div className="col2">
                <p>ÖPPETTIDER:</p>    
                <p>Mån-Fre 11:00 - 20:00</p>
                <p>Lör-Sön 12:00 - 20:00</p>   
            </div>
        </div>
        );
    }
}

export default Footer;