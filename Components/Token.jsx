import React from "react";

const Token = () => {
  return( <section className="token pt-125">
     <div className="container">
        <div className="row align-items-center mt-none-30">
            <div className="col-lg-5 mt-30">
                <div className="token__content wow fadeInLeft">
                    <div className="sec-title bm-20">
                        <h5 className="sec-title__subtitle">
                            Tokenomics
                        </h5>
                        <h2 className="sec-title__title">
                            Token allocations and funds distribution

                        </h2>
                    </div>

                    <ul className="nav nav-tagbs token__tab" id="mytab" role="tabList">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            type="button"
                            data-bs-target="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                            >
                            Funding Allocation
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link "
                            id="profile-tab"
                            data-bs-toggle="tab"
                            type="button"
                            data-bs-target="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="true"
                            >
                            Token Allocation
                            </button>
                        </li>
                    </ul>
                    <div className="token__info mt-40">
                        <h2 className="">1 YKT= 0.0024 BTC</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur quaerat placeat iure.</p>
                        <div className="token-btn mt-40">
                            <a href="" className="thm-btn">Buy now</a>
                        </div>

                    </div>


                </div>
            </div>
            <div className="col-lg-7 mt-30">
                <div className="tab-content wow fadeInRight"
                data-wow-delay="100ms"
                id="myTabContent"
                >
                <div className="tab-pane fade show active" id="home" role="tabpanel"
                aria-labelledby="home-tab"
                >
                <div className="token__img">
                    <img src="assets/img/token/token_chart.png" alt="" />
                </div>
                </div>
                <div className="tab-pane fade " id="profile" role="tabpanel"
                aria-labelledby="profile-tab"
                >
                <div className="token__img">
                    <img src="assets/img/token/token_chart2.png" alt="" />
                </div>
                </div>
                </div>
            </div>


        </div>
    </div>
  </section>
  
);
};

export default Token;
