import React, {Children, useState} from "react";
import {ethers} from "ethers";
import toast from "react-hot-toast";

import { CHECK_WALLET_CONNECTED,
     CONNECT_WALLET,
     GET_BALANCE,
     CHECK_ACCOUNT_BALANCE,
     TOKEN_ICO_CONTRACT, ERC20,
     ERC20_CONTRACT, 
     TOKEN_ADDRESS,
     addtokenToMetamask

 } from "./constants";
import { ACTION } from "next/dist/client/components/app-router-headers";

 export const TOKEN_IC0_Context = React.createContext();

 export const TOKEN_ICO_Provider = ({children})=>{
    const DAPP_NAME = "TOKEN ICO DAPP";
    const currency = "ETH";
    const network = "sepolia";

    const [loader, setLoader] = useState(false);
    const [account, setAccount] = useState();
    const [count, setCount] = useState(0);

    const notifySuccess = (msg) => toast.success(msg,{
        duration: 200
    });
    const notifyError = (msg)=> toast.error(msg, {duration: 200

    })
    const TOKEN_ICO= async()=>{
        try {
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                setLoader(true);
                setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();

                const tokenDetails = await contract.getTokenDetails();
                const contractOwner = await contract.owner();
                const soldTokens = await contract.soldTokens();

                const ethBal = await GET_BALANCE();

                const token = {
                    tokenBal: ethers.utils.formatEther(tokenDetails.balance.toString()),
                    name: tokenDetails.name,
                    symbol: tokenDetails.symbol,
                    supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
                    tokenPrice: ethers.utils.formatEther(
                        tokenDetails.tokenPrice.toString()
                    ),
                    tokenAddr: tokenDetails.tokenAddr,
                    maticBal: ethBal,
                    address: address.toLowerCase(),
                    owner: contractOwner.toLowerCase(),
                    soldTokens: soldTokens.toNumber(),


                }
                return token;
            }
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error) 
        }
    }
    const BUY_TOKEN= async(amount)=>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();

                const availableToken = ethers.utils.formatEther(
                    tokenDetails.balance.toString()
                );
                if(availableToken > 1){
                    const price =  ethers.utils.formatEther(
                        tokenDetails.tokenPrice.toString()
                    );
                    const payAmount = ethers.utils.parseUnits(price.toString(),"ether");
                    const transaction = await contract.buyToken(Number(account),
                {
                    value: payAmount.toString(),
                    gasLimit: ethers.utils.hexlify(8000000)
                }
                );
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                }
            }
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error) 
        }
    }
    const TOKEN_WITHDRAW= async()=>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();

                const availableToken = ethers.utils.formatEther(
                    tokenDetails.balance.toString()
                );

                if(availableToken > 1){
                const transaction = await contract.withdrawAllTokens();
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                }

                
            }
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error) 
        } 
    }
    const UPDATE_TOKEN= async(_address)=>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();    
                const transaction = await contract.updateToken(_address);
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                
            }
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error) 
        } 
    }
    const UPDATE_TOKEN_PRICE= async()=>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount = ethers.utils.parseUnits(price.toString(), "ether"); 
                const transaction = await contract.updateTokenSalePrice(payAmount);
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                
            } 
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error) 
        }
    }
    const DONATE= async(AMOUNT)=>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether"); 
                const transaction = await contract.transferToOwner(payAmount,{
                    value: payAmount.toString(),
                    gasLimit: ethers.utils.hexlify(8000000)
                });
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                
            }  
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error)  
        }
    }
    const TRANSFER_ETHER= async(transfer)=>{
        try {
            setLoader(true);
            const {_receiver, _amount}= transfer;
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether"); 
                const transaction = await contract.transferEther(_receiver, payAmount,{
                    value: payAmount.toString(),
                    gasLimit: ethers.utils.hexlify(8000000)
                });
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                
            }  
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error) 
        }
    }
    const TRANSFER_TOKEN= async()=>{
        try {
            setLoader(true);
            const {_tokenAddress,_sendTo, _amount}= transfer;
            const address = await CHECK_WALLET_CONNECTED();
            if(address){
                const contract = await ERC20_CONTRACT(_tokenAddress);
                const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether"); 
                const transaction = await contract.transfer(_sendTo, payAmount,{
                    gasLimit: ethers.utils.hexlify(8000000)
                });
                await transaction.wait();
                setLoader(false);
                notifySuccess("Transaction completed successfully");
                window.location.reload();
                
            }  
        } catch (error) {
            notifyError("error try again later");
            setLoader(false);
           console.log(error)  
        }
    };

    return(
        <TOKEN_IC0_Context.Provider value = {
            {
                TOKEN_ICO,
                BUY_TOKEN,
                TRANSFER_TOKEN,
                TRANSFER_ETHER,
                DONATE,
                UPDATE_TOKEN,
                UPDATE_TOKEN_PRICE,
                TOKEN_ADDRESS,
                TOKEN_WITHDRAW,ERC20,
                CHECK_ACCOUNT_BALANCE,
                loader,
                setAccount,
                setLoader, account,currency,
                CONNECT_WALLET, 
                addtokenToMetamask
            }
        }>
            {children}

        </TOKEN_IC0_Context.Provider>
    )
 }
