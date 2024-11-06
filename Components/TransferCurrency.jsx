import React, {useState,useEffect} from "react";

const TransferCurrency = ({setTransferCurrency,
  TRANSFER_ETHER,
  detail,
  currency,
  CHECK_ACCOUNT_BALANCE,
  setLoader}) => {
  const [transfer, setTransfer]= useState({
    _amount:"",
    _receiver: "",
  });
  const [receiver, setReceiver] = useState();
  const [address, setAddress] = useState();

  useEffect(()=>{
    if(address){
      const loadToken = async()=>{
        setLoader(true);
        const balance = await CHECK_ACCOUNT_BALANCE(address);
        if(balance == undefined){
          console.log("Kindly paste the token address");
          alert("Kindly paste the token address");
        }else{
          setTokenDetails(balance);
          console.log(balance);
        }
        setLoader(false);
      }
      loadToken();
    }
    
   
  },[address])
  return( <section className="new-margin ico-contract pos-rel"><div className="container">
  <div className="ico-contact__wrap">
  
      <h2 className="title">Transfer {currency}{""}
          <strong onclick= {()=> setTransferCurrency(false)}> X </strong>
      </h2>
      <div className="row">
          <div className="col-lg-12">
              {
                  receiver ? (
                      <input type="text"
                       value= {`Account Balance ${receiver.slice(0, 8)}
                         ${currency}`}
                      
                      />
                  ): (
                      <input type="text" 
                      placeholder = "_receiver"
                      onchange={(e) => (setToken({...tokenDetails,
                        
                        _receiver: e.target.value,}), 
                      setAddress(e.target.value))}
                  
                      
                      />  
                  )
              }
  
  
              <div className="col-lg-12">
  
  
                      <input type="text" 
                      placeholder = "_sendTo"
                      onchange={(e) => (
                        setTransfer({...transfer,
                        
                        _amount: e.target.value,}), 
                      setTransferToken(e.target.value))}
                  
                      
                      />  
              </div>
  
  
            <p>
              <strong>Balance: </strong> {detail?.maticBal} {currency}

            </p>
            <div className="ico-contract__btn text-center mt-10">
                  <button className="thm-btn" onclick={()=> TRANSFER_ETHER(transfer)}>
                      Transfer Currency
                  </button>
              </div>
  
  
  
  
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

export default TransferCurrency;
