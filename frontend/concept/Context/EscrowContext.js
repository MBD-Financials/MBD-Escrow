import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";

//INTERNAL  IMPORT
import {
	escrowAddress,
	escrowABI
} from "./constants";


//---FETCHING SMART CONTRACT
const fetchContract = async (signerOrProvider) => {
	return new ethers.Contract(
		escrowAddress,
		escrowABI,
		signerOrProvider
	);
};

//---CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
	try {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = await fetchContract(signer);
		return contract;
	} catch (error) {
		console.log("Something went wrong while connecting with contract", error);
	}
};

export const EscrowContext = React.createContext();

export const EscrowProvider = ({ children }) => {
	//------USESTAT
	const [error, setError] = useState("");
	const [openError, setOpenError] = useState(false);
	const [currentAccount, setCurrentAccount] = useState("");
	const [accountBalance, setAccountBalance] = useState("");

	const [loading, setLoading] = useState(false);

	//---CHECK IF WALLET IS CONNECTD
	const checkIfWalletConnected = async () => {
		try {
			if (!window.ethereum) return setError("Install MetaMask");

			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});

			if (accounts.length) {
				setCurrentAccount(accounts[0].toLowerCase());
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const getBalance = await provider.getBalance(accounts[0]);
				const bal = ethers.utils.formatEther(getBalance);
				setAccountBalance(bal);
				await connectingWithSmartContract();
			} else {
				setError("No Account Found");
			}
		} catch (error) {
			setError("Something wrong while connecting to wallet");
		}
	};

	useEffect(() => {
		checkIfWalletConnected();
		// connectingWithSmartContract();
	}, []);

	useEffect(() => {
		if (!currentAccount) return;
	}, [currentAccount]);

	//---CONNET WALLET FUNCTION
	const connectWallet = async () => {
		try {
			if (!window.ethereum) return setError("Install MetaMask");

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0].toLowerCase());
		} catch (error) {
			setError("Error while connecting to wallet");
		}
	};

	const createContract = async(title, collaborator, amount,details)=>{
		try{
			const contract = await connectingWithSmartContract();
			const trx = await contract.createContract(collaborator,ethers.utils.parseEther(amount.toString()),details,title);
			
		}
		catch(error){
			console.log(error);
		}
	}
	const acceptContract = async(id)=>{
		try{
			const contract = await connectingWithSmartContract();
			const trx = await contract.acceptContract(id);
			
		}
		catch(error){
			console.log(error);
		}
	}
	const fundContract = async(id,amount)=>{
		try{
			const contract = await connectingWithSmartContract();
			const trx = await contract.startContract(id,{value:ethers.utils.parseEther(amount.toString())});
			
		}
		catch(error){
			console.log(error);
		}
	}
	const approveContract = async(id,amount)=>{
		try{
			const contract = await connectingWithSmartContract();
			const trx = await contract.approveContract(id);
			
		}
		catch(error){
			console.log(error);
		}
	}

	const completeContract = async(id)=>{
		try{
			const contract = await connectingWithSmartContract();
			const trx = await contract.completeContract(id);
			
		}
		catch(error){
			console.log(error);
		}
	}

	const cancelContract = async(id)=>{
		try{
			const contract = await connectingWithSmartContract();
			const trx = await contract.cancelContract(id);
			
		}
		catch(error){
			console.log(error);
		}
	}

	const getTotalEscrows = async()=>{
		try {
			if (currentAccount) {
				const contract = await connectingWithSmartContract();
				const trx = await contract.totalEscrows();
				console.log(trx);
			}
		} catch (error) {
			setError("Error while fetching listed NFTs");
		}
	}

	const getMyContractsAssignee = async () => {
		try {
			if (currentAccount) {
				const contract = await connectingWithSmartContract();
				const contracts = await contract.getMyContractsAssignee();
				let data = []
				for (let i = 0; i<contracts.length; i++){
					if (currentAccount ===contracts[i].assignee.toLowerCase()){
						data.push({
							"title": contracts[i].title,
							"assignor": contracts[i].assignor.toLowerCase(),
							"assignee":contracts[i].assignee.toLowerCase(),
							"accepted":contracts[i].accepted,
							"approved":contracts[i].approved,
							"cancelled":contracts[i].cancelled,
							"completed":contracts[i].completed,
							"details":contracts[i].details,
							"started":contracts[i].started,
							"amount":Number(ethers.utils.formatEther(contracts[i].amount)),
							"id":Number(contracts[i].id),
						});
					}
					
				}
				return data;
				
					
				
			}
		} catch (error) {
			console.log(error);
		}
	};
	const getMyContractsAssignor = async () => {
		try {
			if (currentAccount) {
				const contract = await connectingWithSmartContract();
				const contracts = await contract.getMyContractsAssignor();
				let data = []
				for (let i = 0; i<contracts.length; i++){
					if (currentAccount ===contracts[i].assignor.toLowerCase()){
						data.push({
							"title": contracts[i].title,
							"assignor": contracts[i].assignor.toLowerCase(),
							"assignee":contracts[i].assignee.toLowerCase(),
							"accepted":contracts[i].accepted,
							"approved":contracts[i].approved,
							"cancelled":contracts[i].cancelled,
							"completed":contracts[i].completed,
							"details":contracts[i].details,
							"started":contracts[i].started,
							"amount":Number(ethers.utils.formatEther(contracts[i].amount)),
							"id":Number(contracts[i].id),
						});
					}
					
				}
				return data;
				
					
				
			}
		} catch (error) {
			console.log(error);
		}
	};

	

	return (
		<EscrowContext.Provider
			value={{
				checkIfWalletConnected,
				connectWallet,
				getMyContractsAssignee,
				getMyContractsAssignor,
				getTotalEscrows,
				acceptContract,
				fundContract,
				completeContract,
				cancelContract,
				approveContract,
				currentAccount,
				setOpenError,
				openError,
				error,
				loading,
				accountBalance,
				createContract
			}}
		>
			{children}
		</EscrowContext.Provider>
	);
};
