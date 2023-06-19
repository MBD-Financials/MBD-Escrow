import React, { useState, useEffect, useContext } from "react";
import { Button } from "../components/componentsindex";
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import images from "../img";
import Image from "next/image";
//IMPORTING CONTRCT DATA
import { EscrowContext } from "../Context/EscrowContext";
import axios from "axios";

const coinmarketcap = process.env.NEXT_PUBLIC_COINMARKET_API;

const Home = () => {
	const { createContract, currentAccount } = useContext(EscrowContext);
	const [collaborator, setCollaborator] = useState("");
	const [amount, setAmount] = useState("");
	const [amountUSD, setAmountUSD] = useState("");
	const [title, setTitle] = useState("");
	const [details, setdetails] = useState("");
	const handleCollaboratorChange = (e) => {
		setCollaborator(e.target.value);
	};
	//2781

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};
	const handleDetailsChange = (e) => {
		setdetails(e.target.value);
	};
	const handleAmountUSDChange = (e) => {
		setAmountUSD(e.target.value);
	};

	const convertFromUSD = async () =>
		{
			try{
				console.log(coinmarketcap);
				await axios.get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=matic",{
					headers: {"Authorization":coinmarketcap}
				}).then((response)=>{
					console.log(response.data.MATIC);
					setAmount(Number(response.data.MATIC)*amountUSD);
				})
			}catch(error){
				console.log(error);
			}		
		}
	
	useEffect(()=>{
		if(amountUSD!==""){
			convertFromUSD();
		}
		else{
			setAmount("");
		}
	},[amountUSD])
	return (
		<div className="bg-purple-bg">
			<div className="flex justify-center px-2 w-200">
				<p className="text-xl lg:text-6xl mb-5 mt-10 font-bold">
				Welcome to MBD Escrow
				</p>
			</div>

			<div className="flex justify-center px-10 w-50">
				<p className="text-sm lg:text-xl mb-5 mt-2 italic text-justify">
				Trade with confidence, knowing that your funds are protected until the terms of the transaction is met.
				</p>
			</div>

			<div className="flex justify-center">
				<Image
					className="flex w-96 object-cover object-right l:w-auto l:h-auto lg:h-3/3 lg:w-3/4"
					src={images.sketch}
					alt="NFT images"
					width={{}}
					height={{}}
				/>
			</div>

			<div className="px-4">
				<div className="max-w-md bg-white mx-auto lg:p-4 bg-purple shadow-md rounded-md">
					<div className="flex justify-end">
						<Image
							className="flex object-cover object-right h-5 w-20"
							src={images.polygon}
							alt="NFT images"
							width={0}
							height={0}
						/>
					</div>
					<div className="mb-4 px-4 lg:px-0">
						<label
							htmlFor="title"
							className="block text-lg font-medium text-black"
						>
							Title
						</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={handleTitleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>

					<div className="mb-4 px-4 lg:px-0">
						<label
							htmlFor="collaborator"
							className="block text-lg font-medium text-black"
						>
							Collaborator (Polygon Metamask Add)
						</label>
						<input
							type="text"
							id="collaborator"
							value={collaborator}
							onChange={handleCollaboratorChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>

					<div className="flex mb-4 px-4 lg:px-0">
						<div className="grow w-50 mr-2">
							<label
								htmlFor="amount"
								className="block text-lg font-medium text-black mr-2"
							>
								Matic
							</label>
							<input
								type="number"
								id="amount"
								value={amount}
								onChange={handleAmountChange}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>

						<div className="grow">
							<label
								htmlFor="amountUSD"
								className="block text-lg font-medium text-black"
							>
								USD
							</label>
							<input
								type="number"
								id="amountUSD"
								value={amountUSD}
								onChange={handleAmountUSDChange}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
					</div>
					
					<div className="mb-4 px-4 lg:px-0">
						<label
							htmlFor="details"
							className="block text-lg font-medium text-black"
						>
							Details
						</label>
						<textarea
							type="text"
							id="details"
							value={details}
							onChange={handleDetailsChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div className="flex justify-center">
						<Button
							btnName="Create Contract"
							handleClick={() =>
								createContract(title, collaborator, amount, details)
							}
						/>
					</div>
					
					<div className="flex justify-end">
						<p className="text-black italic  text-xs">2% service fee</p>
					</div>
					
				</div>
			</div>
			<div className="flex justify-center mt-5 mb-5">
						<p className="text-white italic  text-xs">Coming soon: disputes, milestones, validators, other tokens</p>
			</div>
			
			<div className="px-4 flex mx-auto flex-col lg:flex-row mt-10 lg:justify-evenly">
				<div className="max-w-md bg-white lg:p-4 bg-purple shadow-md rounded-md mb-10 p-4 text-justify ">
					<h1 className="text-black text-lg font-bold">For Creators</h1>
					<p className="text-black">• Log in using your wallet on Polygon Network </p>
					<p className="text-black">• Fill in the necessary details and create </p>
					<p className="text-black">the contract </p>
					
					<p className="text-black">• Once created, go to the "Created" page to </p>
					<p className="text-black">view the status and progress of your contract</p>
				</div>
				<div className="max-w-md bg-white lg:p-4 bg-purple shadow-md rounded-md mb-10 p-4 text-justify">
					<h1 className="text-black text-lg font-bold">For Collaborators</h1>
					<p className="text-black">• Log in using your wallet on Polygon Network </p>
					<p className="text-black">• Access the "Assigned" page</p>
					<p className="text-black">• View contracts sent to you by the creator.</p>
					<p className="text-black">• Review the contracts and proceed</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
