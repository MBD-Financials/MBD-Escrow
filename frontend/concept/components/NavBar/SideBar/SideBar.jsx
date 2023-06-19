import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";
import { Router } from "next/router";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
 
  const router = useRouter();



  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <div className={Style.navbar_container_left}>
          <div className={Style.navbar_container_logo}>
						<p>MBD Escrow</p>
					</div>
				</div>
          <div className="flex">
          
            {currentAccount == "" ? (
              <Button btnName="Connect Metamask" handleClick={() => connectWallet()} />
            ) : (
              <p className="flex justify-start bg-theme-pruple rounded-md italic border p-2 ... border-black">{currentAccount.substring(0, 10) + "..."}</p>
            )}
          
          </div>
        
      </div>
      <div className={Style.sideBar_menu}>
        <div className={Style.sideBar_menu_box}  onClick={() => closeSideBar()}>
            <Link href="/created">
              Created
						</Link>
        </div>
        <div className={Style.sideBar_menu_box}  onClick={() => closeSideBar()}>
            <Link href="/assigned">
              Assigned
						</Link>
        </div>
      </div>

      

      
    </div>
  );
};

export default SideBar;
