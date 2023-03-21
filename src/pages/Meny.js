import React from "react";

class Meny extends React.Component{
    render(){
        return(
            <>
            <div className="menu-gridcontainer">
            {/* --PIZZOR--*/}
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">Pizzor</h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/napolitansk-pizza-mozzarella_foto_andrea-klintbjer_mathem.jpeg"
                    alt="bild på pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">1. Margarita</span>
                      <span className="menu-item-price">80.00</span>
                    </h3>
                    <p className="menu-item-desc">Tomatsås, ost</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/napolitansk-pizza-mozzarella_foto_andrea-klintbjer_mathem.jpeg"
                    alt="bild på pizza"
                    class="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">2. Vesuvio</span>
                      <span className="menu-item-price">90.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/napolitansk-pizza-mozzarella_foto_andrea-klintbjer_mathem.jpeg"
                    alt="bild på pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">3. Capricciosa</span>
                      <span className="menu-item-price">90.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, färska champinjoner</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/napolitansk-pizza-mozzarella_foto_andrea-klintbjer_mathem.jpeg"
                    alt="bild på pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">4. Hawaii</span>
                      <span className="menu-item-price">90.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, ananas</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/napolitansk-pizza-mozzarella_foto_andrea-klintbjer_mathem.jpeg"
                    alt="bild på pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">5. Milano</span>
                      <span className="menu-item-price">90.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, pepperonikorv, lök</p>
                  </div>
                </div>
              </div>
            </div>
            {/*--SALLADER--*/}
      
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">Sallad (färskt bröd ingår)</h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/AMERIKANSK-SALLAD.jpg"
                    alt="bild på sallad"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">38. Kycklingsallad</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Kyckling, isbergssallad, tomat, lök, paprika, vitlöksdressing
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/AMERIKANSK-SALLAD.jpg"
                    alt="bild på sallad"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">39. Kebabsallad</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Kebab, isbergssallad, tomat, gurka, lök, pepperoni, kebabsås
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/AMERIKANSK-SALLAD.jpg"
                    alt="bild på sallad"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">40. Skinksallad</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Skinka, ost, isbergssallad, tomat, gurka, lök, ananas, kebabsås
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* --Hamburgare-- */}
      
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">
                Hamburgare (pommes, sallad, ost, dressing, 33cl dricka ingår)
              </h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/Hamburgare-1-1.jpg"
                    alt="bild på hamburgare"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">41. Skrovmål 90G</span>
                      <span className="menu-item-price">80.00</span>
                    </h3>
                    <p className="menu-item-desc"></p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/Hamburgare-1-1.jpg"
                    alt="bild på hamburgare"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">42. Superskrovmål 90G*2</span>
                      <span className="menu-item-price">90.00</span>
                    </h3>
                    <p className="menu-item-desc"></p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/Hamburgare-1-1.jpg"
                    alt="bild på hamburgare"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">43. Miniskrovmål 45G</span>
                      <span className="menu-item-price">65.00</span>
                    </h3>
                    <p className="menu-item-desc"></p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/Hamburgare-1-1.jpg"
                    alt="bild på hamburgare"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">44. Megaskrovmål 150G*2</span>
                      <span className="menu-item-price">104.00</span>
                    </h3>
                    <p className="menu-item-desc"></p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/pommes.jpg"
                    alt="bild på pommes"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name"
                        >45. Stripstallrik med dressing</span
                      >
                      <span className="menu-item-price">55.00</span>
                    </h3>
                    <p className="menu-item-desc"></p>
                  </div>
                </div>
              </div>
            </div>
      
            {/* --RULLPIZZOR-- */}
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">Rullpizzor</h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/kebabrulle.jpg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">46. Kebabrulle</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Kebab, ost, isbergssallad, tomat, gurka, lök, kebabsås
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/kebabrulle.jpg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">47. Superkebabrulle</span>
                      <span className="menu-item-price">105.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Kebab, lök, tomater, pepperoni, kebabsås
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/kebabrulle.jpg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">48. Gyrosrulle</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Gyros, tomat, lök, pepperoni, vitlöksdressing
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/kebabrulle.jpg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">49. Kycklingrulle</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Kyckling, lök, tomater, pepperoni, vitlöksdressing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* --INBAKADE PIZZOR-- */}
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">Inbakade pizzor</h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/calzone.jpg"
                    alt="bild på inbakad pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">50. Calzone</span>
                      <span className="menu-item-price">90.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/calzone.jpg"
                    alt="bild på inbakad pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">51. Calzone Susi</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, räkor</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/calzone.jpg"
                    alt="bild på inbakad pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">52. Calzone Paradis</span>
                      <span className="menu-item-price">95.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, ananas</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/calzone.jpg"
                    alt="bild på inbakad pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">53. Calzone Special </span>
                      <span className="menu-item-price">100.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, räkor, champinjoner</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/calzone.jpg"
                    alt="bild på inbakad pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">54. Calzone Kebab</span>
                      <span className="menu-item-price">100.00</span>
                    </h3>
                    <p className="menu-item-desc">Lök, tomater, dressing</p>
                  </div>
                </div>
              </div>
            </div>
            {/* --AMERIKANSKA PIZZOR-- */}
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">Amerikanska Pizzor</h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/amerikanskpizza.jpg"
                    alt="bild på amerikansk pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">62. California</span>
                      <span className="menu-item-price">110.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Köttfärs, lök, dubbel deg, dubbelfyllning
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/amerikanskpizza.jpg"
                    alt="bild på amerikansk pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">63. Dallas</span>
                      <span className="menu-item-price">110.00</span>
                    </h3>
                    <p className="menu-item-desc">Kyckling, ananas, banan, curry</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/amerikanskpizza.jpg"
                    alt="bild på amerikansk pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">64. Los Angelse</span>
                      <span className="menu-item-price">110.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Skinka, salami, köttfärs, pepperoni, het sås
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/amerikanskpizza.jpg"
                    alt="bild på amerikansk pizza"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">65. Miami</span>
                      <span className="menu-item-price">110.00</span>
                    </h3>
                    <p className="menu-item-desc">Skinka, bacon, köttfärs, ägg</p>
                  </div>
                </div>
              </div>
            </div>
            {/* --GRILLRÄTTER-- */}
      
            <div className="foodmenucontainer">
              <h2 className="menu-group-heading">Grillrätter (med ris eller pommes)</h2>
              <div className="menu-group">
                <div className="menu-item">
                  <img
                    src="/kebabtallrik.jpeg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">66. Kebabtallrik</span>
                      <span className="menu-item-price">100.00</span>
                    </h3>
                    <p className="menu-item-desc">Ris/pommes, grönsaker och kebabsås</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/kebabtallrik.jpeg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">67. Kycklingtallrik</span>
                      <span className="menu-item-price">100.00</span>
                    </h3>
                    <p className="menu-item-desc">
                      Ris/pommes, grönsaker, vitlöksdressing
                    </p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/kebabtallrik.jpeg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">68. Gyrostallrik</span>
                      <span className="menu-item-price">100.00</span>
                    </h3>
                    <p className="menu-item-desc">Ris/pommes, grönsaker, vitlökssås</p>
                  </div>
                </div>
                <div className="menu-item">
                  <img
                    src="/kebabtallrik.jpeg"
                    alt="bild på kebab"
                    className="menu-item-image"
                  />
                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name">69. Falafeltallrik</span>
                      <span className="menu-item-price">100.00</span>
                    </h3>
                    <p className="menu-item-desc">Ris/pommes, grönsaker, vitlökssås</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        );
    }
}

export default Meny;