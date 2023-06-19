import React, { useContext } from "react";
import { Button } from "../componentsindex";
import Image from "next/image";
import images from "../../img";
import { MdArrowRightAlt } from "react-icons/md";
import { EscrowContext } from "../../Context/EscrowContext";

export const ContractInfoBox = (contract) => {
	const {
		acceptContract,
		currentAccount,
		fundContract,
		completeContract,
		approveContract,
		cancelContract,
	} = useContext(EscrowContext);
	return (
		<div
			className=" bg-white rounded-lg shadow-lg p-6 mb-6 lg:ml-4 lg:mr-0"
			key={contract.contract.id}
		>
			<div className="flex justify-end">
				<Image
					className="flex object-cover object-right h-5 w-20"
					src={images.polygon}
					alt="NFT images"
					width={0}
					height={0}
				/>
			</div>
			<div className="flex justify-center">
				<h2 className="text-2xl text-black font-semibold mb-4">
					{contract.contract.title}
				</h2>
			</div>

			<div className="mb-4">
				<p className="text-black flex text-sm">
					Creator: {contract.contract.assignor}
				</p>
				<p className="text-black text-sm">
					Collaborator: {contract.contract.assignee}
				</p>
        
        <p className="text-black text-sm">
					Details: {contract.contract.details} 
				</p>
				<p className="text-black text-sm">
					Amount: {contract.contract.amount} Matic
				</p>
        
			</div>

			<div>
				{contract.contract.accepted ? (
					<div className="flex justify-center italic font-semibold border border-black">
						<span className="text-black text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-green-500 text-xs lg:text-sm">Accepted</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Approved</span>
					</div>
				) : contract.contract.started ? (
					<div className="flex justify-center italic font-semibold border border-black">
						<span className="text-black text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Accepted</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-green-500 text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Approved</span>
					</div>
				) : contract.contract.started ? (
					<div className="flex justify-center italic font-semibold border border-black">
						<span className="text-black text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Accepted</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-green-500 text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Approved</span>
					</div>
				) : contract.contract.completed ? (
					<div className="flex justify-center italic font-semibold border border-black">
						<span className="text-black text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Accepted</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-green-500 text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Approved</span>
					</div>
				) : contract.contract.approved ? (
					<div className="flex justify-center italic font-semibold border border-black px-20">
						<span className="text-black text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Accepted</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-green-500 text-xs lg:text-sm">Approved</span>
					</div>
				) : contract.contract.cancelled ? (
					<div className="flex justify-center italic font-semibold border border-black">
						<span className="text-black text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Accepted</span>
            <span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-red-500 text-xs lg:text-sm">Rejected</span>
					</div>
				) : (
					<div className="flex justify-center italic font-semibold border border-black">
						<span className="text-green-500 text-xs lg:text-sm">Created</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Accepted</span>
            <span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						
						<span className="text-black text-xs lg:text-sm">Funded</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Completed</span>
						<span className="text-black">
							<MdArrowRightAlt className="mt-0 lg:mt-1" />
						</span>
						<span className="text-black text-xs lg:text-sm">Approved</span>
					</div>
				)}
			</div>
			<div className="flex justify-center mt-5">
				<div>
					{contract.contract.accepted &&
					currentAccount === contract.contract.assignor ? (
						<Button
							btnName="Fund"
							handleClick={() =>
								fundContract(contract.contract.id, contract.contract.amount)
							}
						/>
					) : contract.contract.accepted &&
					  currentAccount === contract.contract.assignee ? (
						<></>
					) : contract.contract.started &&
					  currentAccount === contract.contract.assignee ? (
						<Button
							btnName="Complete"
							handleClick={() => completeContract(contract.contract.id)}
						/>
					) : contract.contract.started &&
					  currentAccount === contract.contract.assignor ? (
						<></>
					) : contract.contract.completed &&
					  currentAccount === contract.contract.assignor ? (
						<Button
							btnName="Approve"
							handleClick={() => approveContract(contract.contract.id)}
						/>
					) : contract.contract.completed &&
					  currentAccount === contract.contract.assignee ? (
						<></>
					) : contract.contract.approved &&
					  (currentAccount === contract.contract.assignee ||
							currentAccount === contract.contract.assignor) ? (
						<></>
					) : contract.contract.cancelled ? (
						<p className="text-red-600 italic text-sm"> Contract Cancelled</p>
					) : (currentAccount === contract.contract.assignee)? (
						<Button
							btnName="Accept"
							handleClick={() => acceptContract(contract.contract.id)}
						/>)
            :<></>
					}
				</div>
				<div className="ml-2">
					{(currentAccount === contract.contract.assignor && (!contract.contract.approved) && (!contract.contract.cancelled) ) ? (
						<Button
							btnName="Cancel"
							handleClick={() => {
								cancelContract(contract.contract.id);
							}}
						/>
					) : (!contract.contract.approved) ? <></> 
          :(
						<p className="text-sm text-green-500 italic">Contract Completed Successfully</p>
					)}
				</div>
			</div>
			<div className="flex justify-end">
				<p className="text-black italic  text-xs">2% service fee</p>
			</div>
		</div>
	);
};

export default ContractInfoBox;
