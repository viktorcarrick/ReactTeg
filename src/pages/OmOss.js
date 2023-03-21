import React from "react";
import {Link} from "react-router-dom";

class OmOss extends React.Component{
    render(){
        return(
            <div className="om-oss-grid-container">
            <div className="omosstextbox">
              <div className="omosscontainer">
                <h1 className="bioheader">Om oss</h1>
                <p className="biodesc">
                  Vi är en pizzeria benägen i stadsdelen Teg i Umeå! Våran specialitet
                  är pizza i alla dess former, men vi har även ett stort utbud av
                  hamburgare, grillrätter och sallad. Välkommen till oss!
                </p>
                <p className="biodesc">Med vänlig hälsning, Tegs Pizzeria & Grill</p>
                <Link to="/motoss" style={{textDecoration: 'none'}}>
                  <h2 className="meetus">Möt vårt team!</h2>
                </Link>
                <div className="fbimg">
                  <Link
                    to="https://www.facebook.com/SunkigaHakISverige/photos/a.513125605402582/5566048296776929/?paipv=0&eav=AfYqyjKMKDJt88WMteOgururDjZ-OylHQB6yIPl-Jl0ZAeQtF-5fx5TLbdpPxzUG2ss&_rdr"
                  >
                    <img
                      src="/Facebook_Logo_(2019).png"
                      alt="Bild på facebooks logotyp"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="videobox">
              <div className="videocontainer">
                <video width="100%" controls muted>
                  <source src="/Pizza - Promo Video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="oppettiderbox">
              <div className="timescontainer">
                <h1 className="oppettidertext">Öppettider</h1>
                <table>
                  <tr>
                    <th>Måndag</th>
                    <td>11:00 - 20:00</td>
                  </tr>
                  <tr>
                    <th>Tisdag</th>
                    <td>11:00 - 20:00</td>
                  </tr>
                  <tr>
                    <th>Onsdag</th>
                    <td>11:00 - 20:00</td>
                  </tr>
                  <tr>
                    <th>Torsdag</th>
                    <td>11:00 - 20:00</td>
                  </tr>
                  <tr>
                    <th>Fredag</th>
                    <td>11:00 - 20:00</td>
                  </tr>
                  <tr>
                    <th>Lördag</th>
                    <td>12:00 - 20:00</td>
                  </tr>
                  <tr>
                    <th>Söndag</th>
                    <td>12:00 - 20:00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

export default OmOss;