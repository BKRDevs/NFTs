import React from 'react'
import { useEffect , useState } from 'react';
import { ethers } from 'ethers';
import contract from '../../contracts/NFTCollectible.json';
import {Wallet} from './WalletElement';

const contractAddress = "0xe7869164fd7c051938fbee02c6ee3fcde68f9946";
const abi = contract.abi;

const WalletBtn = () => {

    const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => { 
    const {ethereum} = window;
    if (!ethereum){
      console.log('Install metamask')
      return;
    }else{
      console.log('Wallet connected')
    }

    const accounts = await ethereum.request({ method: 'eth_accounts'});

      if(accounts.length !==0){
        const account = accounts [0];
        console.log("Found an authorized account", account);
        setCurrentAccount(account);
      }else {
        console.log("No authorized account found");
      }

  }

  const connectWalletHandler = async () => { 
    const {ethereum} = window;
    if(!ethereum){
      alert("please install Metamask")
    }
    try{
      const accounts = await ethereum.request({method:'eth_requestAccounts'});
      console.log("Found an account! Address:", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err){
      console.log(err);
    }
  }

  const mintNftHandler = async () => {
    try {
      const {ethereum}= window;

      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi,signer);
        console.log("Intialize payment");
        let nftTxn = await nftContract.mintNFTs(1,{value: ethers.utils.parseEther("0.05")});
      
        console.log("Minting... please wait");
        await nftTxn.wait();

        console.log(`minted, see transaction:https://bscscan.com/tx/${nftTxn.hash}`);
      }else{
        console.log("Ethereum object does not exist");
      }
    } catch (err){
      console.log(err);
    }
   }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

    return (
        
            
        <Wallet>
              {currentAccount ? mintNftButton() : connectWalletButton()}
        </Wallet>
    )
}

export default WalletBtn
