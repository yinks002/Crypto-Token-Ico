import React, { useEffect,useState } from "react";
import { shortenAddress } from "../Utils";
const Popup = ({setBuyModel,
  BUY_TOKEN,
  currency,
  detail,
  account,
  ERC20,
  TOKEN_ADDRESS,
  setLoader}) =>{
    const [amount, setAmount] = useState();
    const [transferToken, setTransferToken] = useState();
  
    useEffect(()=>{
     setLoader(true);
     ERC20(TOKEN_ADDRESS).then((items)=>{
      setTransferToken(items);
      console.log(items);
      setLoader(false);
     })
      
     
    },[])
    return( <section className="new-margin ico-contract pos-rel"><div className="container">
    <div className="ico-contact__wrap">
        <h2 className="title">Buy Token{""}
            <strong onclick= {()=> setBuyModel(false)}> X </strong>
        </h2>
        <div className="row">
       
      
    
                <div className="col-lg-6">
                    <input type="text" 
                        placeholder = {`Token Balance: ${transferToken?.balance}                                                  ${transferToken?.symbol}`}
                        onchange={(e) => setAmount(e.target.value)}
                        />  
                    <div className="col-lg-6">
                        <input type="text" 
                        value={amount ? 
                          `${amount * detail?.tokenPrice}${currency}`:"output value"
                        
                        }
                    
                        
                        />  
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <textarea 
                        disabled
                        name="message" cols="30" rows={10}
                        placeholder={`Current Price: ${detail?.tokenBal}${detail?.symbol} Token Address: ${detail?.tokenBal} ${shortenAddress(detail?.tokenAddr)}`}
                        
                        ></textarea>
                        </div>
                
    
    
                <div className="ico-contract__btn text-center mt-10">
                    <button className="thm-btn" onclick={()=> BUY_TOKEN(amount)}>
                       Buy Token
                    </button>
                </div>
    
    
    
            
        </div>
  
  
        <div className="ico-contact__shape-img">
            <div className="shape shape--1">
                <div className="">
                    <img src="assets/img/shape/c_shape1.png" alt="" />
                </div>
            </div>
            <div className="shape shape--2">
                <div className="">
                    <img src="assets/img/shape/c_shape2.png" alt="" />
                </div>
            </div>
        </div>
  
  
    </div>
  
  
  </div>
  
  <div className="ico-contact__shape">
    <div className="shape shape--1">
       
            <img src="assets/img/shape/c_shape1.png" alt="" />
        
    </div>
    <div className="shape shape--2">
       
            <img src="assets/img/shape/c_shape2.png" alt="" />
        
    </div>
    <div className="shape shape--3">
       
        <img src="assets/img/shape/c_shape3 .png" alt="" />
    
  </div>
  </div></section>
  );
  };

export default Popup;
