import React from "react";

const Features = () => {
  return(
  
  <section className="features pos-rel pb-150 mb-0-pb">

<div className="container">
    <div className="sec-title text-center mb-95">
        <h5 className="sec-title__subtitle">
            Why should you choose us?
        </h5>
        <h2 className="sec-title__tile mb-25">Why should you choose our token?
        </h2>
    </div>
    <div className="feature__wrap pos-rel ul_li_between">
        <div className="feature__item text-center">
            <div className="icon">
                <img src="assets/img/icon/f_01.svg" alt="" />
            </div>
            <h4>Mobile payment <br />
                made easy
            </h4>
        </div>
        <div className="feature__item text-center">
            <div className="icon">
                <img src="assets/img/icon/f_02.svg" alt="" />
            </div>
            <h4>Investment <br />
               Projects
            </h4>
        </div>
        <div className="feature__item text-center">
            <div className="icon">
                <img src="assets/img/icon/f_03.svg" alt="" />
            </div>
            <h4>Lifetime free <br />
                Transaction
            </h4>
        </div>
        <div className="feature__item text-center">
            <div className="icon">
                <img src="assets/img/icon/f_04.svg" alt="" />
            </div>
            <h4>secure your <br />
               money
            </h4>
        </div>
        <div className="feature__line-shape">
            <img src="assets/img/shape/f_shape.png" alt="" />
        </div>
    </div>
   </div>
   <div className="feature__sec-shape">
    <img src="assets/img/shape/s_shape.png" alt="" />
   </div>
  
  </section>
  );
}
;

export default Features;
