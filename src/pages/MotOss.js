import React from "react";

class MotOss extends React.Component{
    render(){
        return(
            <div className="team-gridcontainer">
            <div className="person1-grid-item">
              <div className="profilepic-container">
                <img src="/profile.png" alt="profilbild" id="profilepic1"/>
              </div>
              <div className="profileinfo-container">
                <h1 className="profile-name">Hasse "Wellpapp" Hansson</h1>
                <p className="profile-bio">
                  Nordisk mästare i pizzakartongsvikning 2017, 2018, 2019, 2022 och
                  2023.
                </p>
              </div>
            </div>
            <div className="person2-grid-item">
              <div className="profilepic-container">
                <img src="/profile.png" alt="profilbild" id="profilepic1" />
              </div>
              <div className="profileinfo-container">
                <h1 className="profile-name">Douglas "Degen" Didriksson</h1>
                <p className="profile-bio">
                  Medgrundare av Tegs Pizzeria & Grill och upphovsmannen till vår
                  världsberömda pizzadeg.
                </p>
              </div>
            </div>
            <div className="person3-grid-item">
              <div className="profilepic-container">
                <img src="/profile.png" alt="profilbild" id="profilepic1"  />
              </div>
              <div className="profileinfo-container">
                <h1 className="profile-name">Sven "Såsen" Svensson</h1>
                <p className="profile-bio">
                  Medgrundare av Tegs Pizzeria & Grill och upphovsmannen till vår
                  världsberömda kebabsås.
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default MotOss;