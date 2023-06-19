import React, { useEffect, useState, useContext } from "react";
import { EscrowContext } from "../Context/EscrowContext";
import { ContractInfoBox } from "../components/componentsindex.js";

const created = () => {
    const {currentAccount, getMyContractsAssignor } = useContext(EscrowContext);
    const [contracts, setContracts] = useState([])
    useEffect(() => {
		if (currentAccount) {
			const data = getMyContractsAssignor().then((items) => {
                setContracts(items);
              });
            // setContracts(data);
		}
	}, [currentAccount]);
	return (
		<div>
			<div className="grid grid-cols-1 lg:px-10 lg:grid-cols-3">
				{contracts.map((item, index) => (
					<ContractInfoBox contract={item}/>
				))}
			</div>
		</div>
	);
};

export default created;
