import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
//----IMPORT ICON

import Link from "next/link";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { SideBar } from "./index";
import { Button, Error } from "../componentsindex";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
//IMPORT FROM SMART CONTRACT
import { EscrowContext } from "../../Context/EscrowContext";

const NavBar = () => {
	const [openSideMenu, setOpenSideMenu] = useState(false);
	const router = useRouter();
	//SMART CONTRACT SECTION
	const { currentAccount, connectWallet } = useContext(EscrowContext);

	const openSideBar = () => {
		if (!openSideMenu) {
		  setOpenSideMenu(true);
		} else {
		  setOpenSideMenu(false);
		}
	  };

	return (
		<div>
			<div className={Style.navbar}>
				<div className={Style.navbar_container}>
					<div className={Style.navbar_container_left}>
						<Link href="/" className="headerLink text-white">
							<div className={Style.logo}>
								<p>MBD Escrow</p>
							</div>
						</Link>
					</div>

					<div className={Style.navbar_container_right}>
						<div className={Style.navbar_container_right_help}>
							<Link href="/created" className="headerLink text-white">
								Created
							</Link>
						</div>

						<div className={Style.navbar_container_right_help}>
							<Link href="/assigned" className="headerLink text-white">
								Assigned
							</Link>
						</div>

						{/* CREATE BUTTON SECTION */}
						<div className={Style.navbar_container_right_button}>
							{currentAccount == "" ? (
								<Button btnName="Connect Metamask" handleClick={() => connectWallet()} />
							) : (
								<p className="flex justify-center bg-theme-pruple rounded-md italic  border border-black">{currentAccount.substring(0, 10) + "..."}</p>
							)}
						</div>
					</div>
				</div>
				<div div className={Style.navbar_container_right_menuBtn}>
					<div className={Style.navbar_container_logo}>
						<Link href="/">
						MBD Escrow
						</Link>
					</div>
				
					<div>
						
					</div>
					<div>
						<CgMenuRight
							className={Style.menuIcon}
							onClick={() => openSideBar()}
						/>
					</div>
            	</div>
				{openSideMenu && (
					<div className={Style.sideBar}>
						<SideBar
							setOpenSideMenu={setOpenSideMenu}
							currentAccount={currentAccount}
							connectWallet={connectWallet}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
