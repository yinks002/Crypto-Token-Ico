import React from "react";

const TokenInfo = ({detail, currency}) => {
  return( <section className="token-info pos-rel pt-200 pb-150">
      <div className="container">
    <div className="row">
        <div className="col-xl-8 offset-xl-4">
            <div className="token-info__tile sec-title mb-95 text-center text-xl-start">

                <h5 className="sec-title__subtitle">ICO Yinks Token</h5>
                <h2 className="sec-title__title">
                    ICO Token <br/> Details and initial-scale
                </h2>

            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-4">
            <div className="token-info__img">
                <img src="assets/img/token/t_info_img.png" alt="" />
            </div>
        </div>

        <div className="col-lg-8">
            <div className="token-info--info-wrap ul_li">
                <ul className="token-info__list token-info--start">
                    <li>
                        <h4>Total supply</h4>
                        <span>{detail?.supply} {detail?.symbol}</span>
                    </li>
                    <li>
                        <h4>Sold Tokens</h4>
                        <span>{Number(detail?.soldToken)} {detail?.symbol}</span>
                    </li>
                    <li>
                        <h4>Minimal transaction</h4>
                        <span>10 Tokens / Transaction</span>
                    </li>
                </ul>

                <ul className="token-info__list token-info--end">
                    <li>
                        <h4>Token Market Value</h4>
                        <span>
                            {Number(detail?.supply) * Number(detail?.tokenPrice)}
                            {currency}
                        </span>
                    </li>
                    <li>
                        <h4>fund Raised</h4>
                        <span>
                            {Number(detail?.soldTokens) * Number(detail?.tokenPrice)}
                            {currency}
                        </span>
                    </li>
                    <li>
                        <h4>Acceptable currency</h4>
                        <span>
                           BTC,ICP,ADA
                        </span>
                    </li>
                </ul>
            </div>
        </div>

    </div>

</div>

    <div className="token-info__shape">
        <div className="shape shape--1">
            <img src="assets/img.shape/ti_shape.png" alt="" />
        </div>

        <div className="shape shape--2">
            <img src="assets/img.shape/ti_shape2.png" alt="" />
        </div>
    </div>


  </section>
  
);
};

export default TokenInfo;
