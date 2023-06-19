import React, { useEffect, useState, useContext } from "react";
import { EscrowContext } from "../Context/EscrowContext";
import { ContractInfoBox } from "../components/componentsindex.js";


const assigned = () => {
    const {currentAccount, getMyContractsAssignee } = useContext(EscrowContext);
    const [contracts, setContracts] = useState([])
    useEffect(() => {
		if (currentAccount) {
			const data = getMyContractsAssignee().then((items) => {
                setContracts(items);
              });
            // setContracts(data);
		}
	}, [currentAccount]);

      return (
        <div className="grid grid-cols-1 lg:px-10 lg:grid-cols-3">
            {contracts.length !== 0 ? contracts.map((item, index) => (
                <ContractInfoBox contract={item}/> 
            )): <></>}
        </div>

    )
  };

export default assigned;