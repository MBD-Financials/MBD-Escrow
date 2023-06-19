exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 2804:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__QHarr"
};


/***/ }),

/***/ 6368:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "NavBar_navbar__Bstg3",
	"navbar_container": "NavBar_navbar_container__BjO6p",
	"top_menu": "NavBar_top_menu__2fwPh",
	"top_menu_items": "NavBar_top_menu_items__p2VmB",
	"navbar_container_left": "NavBar_navbar_container_left__2MWYz",
	"logo": "NavBar_logo__787js",
	"navbar_container_left_box_input_box": "NavBar_navbar_container_left_box_input_box__GzTk_",
	"search_icon": "NavBar_search_icon__IRkqD",
	"navbar_container_right": "NavBar_navbar_container_right__qLj_0",
	"navbar_container_right_discover": "NavBar_navbar_container_right_discover__po_Gx",
	"navbar_container_right_help": "NavBar_navbar_container_right_help__2PyMU",
	"navbar_container_right_discover_box": "NavBar_navbar_container_right_discover_box__vQwzX",
	"navbar_container_right_help_box": "NavBar_navbar_container_right_help_box___lXZx",
	"navbar_container_right_merchant_box": "NavBar_navbar_container_right_merchant_box__1dbd2",
	"navbar_container_right_notify": "NavBar_navbar_container_right_notify__ERp4L",
	"navbar_conttainer_merchant": "NavBar_navbar_conttainer_merchant__5wPBB",
	"notify": "NavBar_notify__3_YyQ",
	"navbar_container_right_button": "NavBar_navbar_container_right_button__zBpLh",
	"navbar_container_right_profile_box": "NavBar_navbar_container_right_profile_box__U_K1R",
	"navbar_container_right_profile": "NavBar_navbar_container_right_profile__OU68y",
	"navbar_container_logo": "NavBar_navbar_container_logo__KUnUv",
	"navbar_container_right_menuBtn": "NavBar_navbar_container_right_menuBtn__KEjgz",
	"menuIcon": "NavBar_menuIcon__uhdOV",
	"sideBar": "NavBar_sideBar__Od0jR"
};


/***/ }),

/***/ 6825:
/***/ ((module) => {

// Exports
module.exports = {
	"sideBar_box": "SideBar_sideBar_box___NLwd",
	"sideBar_box_logo": "SideBar_sideBar_box_logo__vkCGL",
	"sideBar_closeBtn": "SideBar_sideBar_closeBtn__UIXTP",
	"navbar_container_logo": "SideBar_navbar_container_logo__wdkES",
	"sideBar_social": "SideBar_sideBar_social__Jfpkk",
	"sideBar_menu": "SideBar_sideBar_menu__geP9a",
	"sideBar_menu_box": "SideBar_sideBar_menu_box__N17Gn",
	"sideBar_discover": "SideBar_sideBar_discover__oHdpW",
	"sideBar_button": "SideBar_sideBar_button__mom_N"
};


/***/ }),

/***/ 1898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ EscrowContext),
  "D": () => (/* binding */ EscrowProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(2840);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./Context/EscrowABI.json
const EscrowABI_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"assignor","type":"address"},{"indexed":true,"internalType":"address","name":"assignee","type":"address"}],"name":"ContractAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"assignor","type":"address"},{"indexed":true,"internalType":"address","name":"assignee","type":"address"}],"name":"ContractCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"assignor","type":"address"},{"indexed":true,"internalType":"address","name":"assignee","type":"address"}],"name":"ContractCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"assignor","type":"address"},{"indexed":true,"internalType":"address","name":"assignee","type":"address"}],"name":"ContractCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"assignor","type":"address"},{"indexed":true,"internalType":"address","name":"assignee","type":"address"}],"name":"ContractEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"assignor","type":"address"},{"indexed":true,"internalType":"address","name":"assignee","type":"address"}],"name":"ContractStarted","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"acceptContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"approveContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"cancelContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"companyProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"completeContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_assignee","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_details","type":"string"},{"internalType":"string","name":"_title","type":"string"}],"name":"createContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"escrows","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"assignor","type":"address"},{"internalType":"address","name":"assignee","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"details","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"accepted","type":"bool"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"completed","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"cancelled","type":"bool"},{"internalType":"bool","name":"funded","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyAssignedContractAssignor","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"assignor","type":"address"},{"internalType":"address","name":"assignee","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"details","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"accepted","type":"bool"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"completed","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"cancelled","type":"bool"},{"internalType":"bool","name":"funded","type":"bool"}],"internalType":"struct Escrow.Escrows[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyAssignedContractsAssignee","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"assignor","type":"address"},{"internalType":"address","name":"assignee","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"details","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"accepted","type":"bool"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"completed","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"cancelled","type":"bool"},{"internalType":"bool","name":"funded","type":"bool"}],"internalType":"struct Escrow.Escrows[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyContractsAssignee","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"assignor","type":"address"},{"internalType":"address","name":"assignee","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"details","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"accepted","type":"bool"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"completed","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"cancelled","type":"bool"},{"internalType":"bool","name":"funded","type":"bool"}],"internalType":"struct Escrow.Escrows[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyContractsAssignor","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"assignor","type":"address"},{"internalType":"address","name":"assignee","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"details","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"bool","name":"accepted","type":"bool"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"completed","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"cancelled","type":"bool"},{"internalType":"bool","name":"funded","type":"bool"}],"internalType":"struct Escrow.Escrows[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"startContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalEscrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawCompleteCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawProfit","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./Context/constants.js

//NFT MARKETPLACE
const escrowAddress = "0xCbEca595560d45f5375f2Ab41FdD307F26dD17cf";
// "0xB23A6A3a053C2bfab042b0Adc2c27b6384C31279";
const escrowABI = EscrowABI_namespaceObject.Mt;

;// CONCATENATED MODULE: ./Context/EscrowContext.js





//INTERNAL  IMPORT

//---FETCHING SMART CONTRACT
const fetchContract = async (signerOrProvider)=>{
    return new external_ethers_.ethers.Contract(escrowAddress, escrowABI, signerOrProvider);
};
//---CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async ()=>{
    try {
        const web3Modal = new (external_web3modal_default())();
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = await fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract", error);
    }
};
const EscrowContext = /*#__PURE__*/ external_react_default().createContext();
const EscrowProvider = ({ children  })=>{
    //------USESTAT
    const [error, setError] = (0,external_react_.useState)("");
    const [openError, setOpenError] = (0,external_react_.useState)(false);
    const [currentAccount, setCurrentAccount] = (0,external_react_.useState)("");
    const [accountBalance, setAccountBalance] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    //---CHECK IF WALLET IS CONNECTD
    const checkIfWalletConnected = async ()=>{
        try {
            if (!window.ethereum) return setError("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            if (accounts.length) {
                setCurrentAccount(accounts[0].toLowerCase());
                const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
                const getBalance = await provider.getBalance(accounts[0]);
                const bal = external_ethers_.ethers.utils.formatEther(getBalance);
                setAccountBalance(bal);
                await connectingWithSmartContract();
            } else {
                setError("No Account Found");
            }
        } catch (error) {
            setError("Something wrong while connecting to wallet");
        }
    };
    (0,external_react_.useEffect)(()=>{
        checkIfWalletConnected();
    // connectingWithSmartContract();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (!currentAccount) return;
    }, [
        currentAccount
    ]);
    //---CONNET WALLET FUNCTION
    const connectWallet = async ()=>{
        try {
            if (!window.ethereum) return setError("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setCurrentAccount(accounts[0].toLowerCase());
        } catch (error) {
            setError("Error while connecting to wallet");
        }
    };
    const createContract = async (title, collaborator, amount, details)=>{
        try {
            const contract = await connectingWithSmartContract();
            const trx = await contract.createContract(collaborator, external_ethers_.ethers.utils.parseEther(amount.toString()), details, title);
        } catch (error) {
            console.log(error);
        }
    };
    const acceptContract = async (id)=>{
        try {
            const contract = await connectingWithSmartContract();
            const trx = await contract.acceptContract(id);
        } catch (error) {
            console.log(error);
        }
    };
    const fundContract = async (id, amount)=>{
        try {
            const contract = await connectingWithSmartContract();
            const trx = await contract.startContract(id, {
                value: external_ethers_.ethers.utils.parseEther(amount.toString())
            });
        } catch (error) {
            console.log(error);
        }
    };
    const approveContract = async (id, amount)=>{
        try {
            const contract = await connectingWithSmartContract();
            const trx = await contract.approveContract(id);
        } catch (error) {
            console.log(error);
        }
    };
    const completeContract = async (id)=>{
        try {
            const contract = await connectingWithSmartContract();
            const trx = await contract.completeContract(id);
        } catch (error) {
            console.log(error);
        }
    };
    const cancelContract = async (id)=>{
        try {
            const contract = await connectingWithSmartContract();
            const trx = await contract.cancelContract(id);
        } catch (error) {
            console.log(error);
        }
    };
    const getTotalEscrows = async ()=>{
        try {
            if (currentAccount) {
                const contract = await connectingWithSmartContract();
                const trx = await contract.totalEscrows();
                console.log(trx);
            }
        } catch (error) {
            setError("Error while fetching listed NFTs");
        }
    };
    const getMyContractsAssignee = async ()=>{
        try {
            if (currentAccount) {
                const contract = await connectingWithSmartContract();
                const contracts = await contract.getMyContractsAssignee();
                let data = [];
                for(let i = 0; i < contracts.length; i++){
                    if (currentAccount === contracts[i].assignee.toLowerCase()) {
                        data.push({
                            "title": contracts[i].title,
                            "assignor": contracts[i].assignor.toLowerCase(),
                            "assignee": contracts[i].assignee.toLowerCase(),
                            "accepted": contracts[i].accepted,
                            "approved": contracts[i].approved,
                            "cancelled": contracts[i].cancelled,
                            "completed": contracts[i].completed,
                            "details": contracts[i].details,
                            "started": contracts[i].started,
                            "amount": Number(external_ethers_.ethers.utils.formatEther(contracts[i].amount)),
                            "id": Number(contracts[i].id)
                        });
                    }
                }
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getMyContractsAssignor = async ()=>{
        try {
            if (currentAccount) {
                const contract = await connectingWithSmartContract();
                const contracts = await contract.getMyContractsAssignor();
                let data = [];
                for(let i = 0; i < contracts.length; i++){
                    if (currentAccount === contracts[i].assignor.toLowerCase()) {
                        data.push({
                            "title": contracts[i].title,
                            "assignor": contracts[i].assignor.toLowerCase(),
                            "assignee": contracts[i].assignee.toLowerCase(),
                            "accepted": contracts[i].accepted,
                            "approved": contracts[i].approved,
                            "cancelled": contracts[i].cancelled,
                            "completed": contracts[i].completed,
                            "details": contracts[i].details,
                            "started": contracts[i].started,
                            "amount": Number(external_ethers_.ethers.utils.formatEther(contracts[i].amount)),
                            "id": Number(contracts[i].id)
                        });
                    }
                }
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(EscrowContext.Provider, {
        value: {
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
        },
        children: children
    });
};


/***/ }),

/***/ 1233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button_Button),
  "G5": () => (/* reexport */ ContractInfoBox_ContractInfoBox),
  "l2": () => (/* reexport */ NavBar_NavBar)
});

// UNUSED EXPORTS: Loader, NFTCard

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button/Button.module.css
var Button_module = __webpack_require__(2804);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/Button/Button.jsx


//INTERNAL IMPORT

const Button = ({ btnName , handleClick , icon , classStyle  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Button_module_default()).box,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: "bg-theme-pruple text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:bg-theme-pruple",
            onClick: ()=>handleClick(),
            children: [
                icon,
                " ",
                btnName
            ]
        })
    });
};
/* harmony default export */ const Button_Button = (Button);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-icons/di"
var di_ = __webpack_require__(9872);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/NavBar/NavBar.module.css
var NavBar_module = __webpack_require__(6368);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
;// CONCATENATED MODULE: ./components/NavBar/Discover/Discover.jsx



//INTERNAL IMPORT

const Discover = ()=>{
    //--------DISCOVER NAVIGATION MENU
    const discover = [
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "searchPage"
        },
        {
            name: "Upload NFT",
            link: "uploadNFT"
        },
        {
            name: "Connect Wallet",
            link: "connectWallet"
        },
        {
            name: "Blog",
            link: "blog"
        }
    ];
    return /*#__PURE__*/ _jsx("div", {
        children: discover.map((el, i)=>/*#__PURE__*/ _jsx("div", {
                className: Style.discover,
                children: /*#__PURE__*/ _jsx(Link, {
                    href: {
                        pathname: `${el.link}`
                    },
                    children: el.name
                })
            }, i + 1))
    });
};
/* harmony default export */ const Discover_Discover = ((/* unused pure expression or super */ null && (Discover)));

;// CONCATENATED MODULE: ./components/NavBar/HelpCenter/HelpCenter.jsx



//INTERNAL IMPORT

const HelpCenter = ()=>{
    const helpCenter = [
        {
            name: "About",
            link: "aboutus"
        },
        {
            name: "Contact Us",
            link: "contactus"
        }
    ];
    return /*#__PURE__*/ _jsx("div", {
        className: Style.box,
        children: helpCenter.map((el, i)=>/*#__PURE__*/ _jsx("div", {
                className: Style.helpCenter,
                children: /*#__PURE__*/ _jsx(Link, {
                    href: {
                        pathname: `${el.link}`
                    },
                    children: el.name
                })
            }, i + 1))
    });
};
/* harmony default export */ const HelpCenter_HelpCenter = ((/* unused pure expression or super */ null && (HelpCenter)));

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/tb"
var tb_ = __webpack_require__(4152);
// EXTERNAL MODULE: ./img/index.js + 63 modules
var img = __webpack_require__(3368);
;// CONCATENATED MODULE: ./components/NavBar/Profile/Profile.jsx







//INTERNAL IMPORT


const Profile = ({ currentAccount , user  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: Style.profile,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: Style.profile_account,
                children: [
                    user.photo ? /*#__PURE__*/ _jsx(Image, {
                        src: user.photo,
                        alt: "user profile",
                        width: 50,
                        height: 50,
                        className: Style.profile_account_img
                    }) : /*#__PURE__*/ _jsx(Image, {
                        src: images.user2,
                        alt: "user profile",
                        width: 50,
                        height: 50,
                        className: Style.profile_account_img
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            user.username ? /*#__PURE__*/ _jsx("p", {
                                className: "text-2xl",
                                children: user.username
                            }) : /*#__PURE__*/ _jsx("p", {
                                className: "text-2xl",
                                children: "User"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                className: "text-sm",
                                children: [
                                    currentAccount.slice(0, 18),
                                    ".."
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsxs("div", {
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: Style.profile_menu_one_item,
                            children: [
                                /*#__PURE__*/ _jsx(FaUserAlt, {}),
                                /*#__PURE__*/ _jsx("p", {
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: {
                                            pathname: "/profile"
                                        },
                                        children: "My Profile"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: Style.profile_menu_one_item,
                            children: [
                                /*#__PURE__*/ _jsx(FaRegImage, {}),
                                /*#__PURE__*/ _jsx("p", {
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: {
                                            pathname: "/profile"
                                        },
                                        children: "My Items"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: Style.profile_menu_one_item,
                            children: [
                                /*#__PURE__*/ _jsx(FaUserEdit, {}),
                                /*#__PURE__*/ _jsx("p", {
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: {
                                            pathname: "/account"
                                        },
                                        children: "Edit Profile"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: Style.profile_menu_one_item,
                            children: [
                                /*#__PURE__*/ _jsx(FaPlus, {}),
                                /*#__PURE__*/ _jsx("p", {
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: {
                                            pathname: "/uploadNFT"
                                        },
                                        children: "Add to Inventory"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Profile_Profile = ((/* unused pure expression or super */ null && (Profile)));

;// CONCATENATED MODULE: ./components/NavBar/Notification/Notification.jsx



//INTERNAL IMPORT


const Notification = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: Style.notification,
        children: [
            /*#__PURE__*/ _jsx("p", {
                children: "Notification"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: Style.notification_box,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: Style.notification_box_img,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: images.user2,
                            alt: "profile image",
                            width: 50,
                            height: 50,
                            className: "rounded-full"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: Style.notification_box_info,
                        children: [
                            /*#__PURE__*/ _jsx("h4", {
                                children: "Cain Akhter"
                            }),
                            /*#__PURE__*/ _jsx("pp", {
                                children: "Measure action your user..."
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-xs",
                                children: "3 minutes ago"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: Style.notification_box_new
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Notification_Notification = ((/* unused pure expression or super */ null && (Notification)));

// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
// EXTERNAL MODULE: ./components/NavBar/SideBar/SideBar.module.css
var SideBar_module = __webpack_require__(6825);
var SideBar_module_default = /*#__PURE__*/__webpack_require__.n(SideBar_module);
;// CONCATENATED MODULE: ./components/NavBar/SideBar/SideBar.jsx






//INTERNAL IMPORT




const SideBar = ({ setOpenSideMenu , currentAccount , connectWallet  })=>{
    const router = (0,router_.useRouter)();
    const closeSideBar = ()=>{
        setOpenSideMenu(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SideBar_module_default()).sideBar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrClose, {
                className: (SideBar_module_default()).sideBar_closeBtn,
                onClick: ()=>closeSideBar()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SideBar_module_default()).sideBar_box,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (SideBar_module_default()).navbar_container_left,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (SideBar_module_default()).navbar_container_logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "MBD Escrow"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: currentAccount == "" ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            btnName: "Connect Metamask",
                            handleClick: ()=>connectWallet()
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "flex justify-start bg-theme-pruple rounded-md italic border p-2 ... border-black",
                            children: currentAccount.substring(0, 10) + "..."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SideBar_module_default()).sideBar_menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (SideBar_module_default()).sideBar_menu_box,
                        onClick: ()=>closeSideBar(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/created",
                            children: "Created"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (SideBar_module_default()).sideBar_menu_box,
                        onClick: ()=>closeSideBar(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/assigned",
                            children: "Assigned"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const SideBar_SideBar = (SideBar);

;// CONCATENATED MODULE: ./components/NavBar/Merchant/Merchant.jsx



//INTERNAL IMPORT

const Merchant = ()=>{
    const merchant = [
        {
            name: "Subscription",
            link: "subscription"
        }
    ];
    return /*#__PURE__*/ _jsx("div", {
        children: merchant.map((el, i)=>/*#__PURE__*/ _jsx("div", {
                className: Style.discover,
                children: /*#__PURE__*/ _jsx(Link, {
                    href: {
                        pathname: `${el.link}`
                    },
                    children: el.name
                })
            }, i + 1))
    });
};
/* harmony default export */ const Merchant_Merchant = ((/* unused pure expression or super */ null && (Merchant)));

;// CONCATENATED MODULE: ./components/NavBar/index.js








// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__(7865);
// EXTERNAL MODULE: ./Context/EscrowContext.js + 2 modules
var EscrowContext = __webpack_require__(1898);
;// CONCATENATED MODULE: ./components/NavBar/NavBar.jsx




//----IMPORT ICON


//INTERNAL IMPORT




//IMPORT FROM SMART CONTRACT

const NavBar = ()=>{
    const [openSideMenu, setOpenSideMenu] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    //SMART CONTRACT SECTION
    const { currentAccount , connectWallet  } = (0,external_react_.useContext)(EscrowContext/* EscrowContext */.G);
    const openSideBar = ()=>{
        if (!openSideMenu) {
            setOpenSideMenu(true);
        } else {
            setOpenSideMenu(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (NavBar_module_default()).navbar,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NavBar_module_default()).navbar_container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (NavBar_module_default()).navbar_container_left,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "headerLink text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (NavBar_module_default()).logo,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "MBD Escrow"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (NavBar_module_default()).navbar_container_right,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (NavBar_module_default()).navbar_container_right_help,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/created",
                                        className: "headerLink text-white",
                                        children: "Created"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (NavBar_module_default()).navbar_container_right_help,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/assigned",
                                        className: "headerLink text-white",
                                        children: "Assigned"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (NavBar_module_default()).navbar_container_right_button,
                                    children: currentAccount == "" ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                                        btnName: "Connect Metamask",
                                        handleClick: ()=>connectWallet()
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "flex justify-center bg-theme-pruple rounded-md italic border border-black",
                                        children: currentAccount.substring(0, 10) + "..."
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    div: true,
                    className: (NavBar_module_default()).navbar_container_right_menuBtn,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (NavBar_module_default()).navbar_container_logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "MBD Escrow"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(cg_.CgMenuRight, {
                                className: (NavBar_module_default()).menuIcon,
                                onClick: ()=>openSideBar()
                            })
                        })
                    ]
                }),
                openSideMenu && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (NavBar_module_default()).sideBar,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SideBar_SideBar, {
                        setOpenSideMenu: setOpenSideMenu,
                        currentAccount: currentAccount,
                        connectWallet: connectWallet
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const NavBar_NavBar = (NavBar);

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/NFTCard/NFTCard.jsx





//INTERNAL IMPORT

const NFTCard = ({ NFTData  })=>{
    const [like, setLike] = useState(true);
    const likeNft = ()=>{
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
    };
    console.log(NFTData);
    return /*#__PURE__*/ _jsx("div", {
        className: Style.NFTCard,
        children: NFTData.map((el, i)=>/*#__PURE__*/ _jsx(Link, {
                href: {},
                children: /*#__PURE__*/ _jsxs("div", {
                    className: Style.NFTCard_box,
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: Style.NFTCard_box_img,
                            children: /*#__PURE__*/ _jsx(Image, {
                                className: "aspect-auto mb-3 rounded-2xl object-cover h-80 w-100",
                                src: el.image,
                                alt: "NFT images",
                                width: 600,
                                height: 600
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: Style.NFTCard_box_update,
                            children: /*#__PURE__*/ _jsx("div", {
                                className: Style.NFTCard_box_update_left,
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: Style.NFTCard_box_update_left_like,
                                    onClick: ()=>likeNft(),
                                    children: [
                                        like ? /*#__PURE__*/ _jsx(AiOutlineHeart, {}) : /*#__PURE__*/ _jsx(AiFillHeart, {
                                            className: Style.NFTCard_box_update_left_like_icon
                                        }),
                                        "",
                                        " 0"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: Style.NFTCard_box_update_details,
                            children: /*#__PURE__*/ _jsx("div", {
                                className: Style.NFTCard_box_update_details_price,
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: Style.NFTCard_box_update_details_price_box,
                                    children: /*#__PURE__*/ _jsx("h4", {
                                        className: "mt-5 mb-1",
                                        children: el.name
                                    })
                                })
                            })
                        })
                    ]
                }, i + 1)
            }, i + 1))
    });
};
/* harmony default export */ const NFTCard_NFTCard = ((/* unused pure expression or super */ null && (NFTCard)));

;// CONCATENATED MODULE: ./components/Loader/Loader.jsx



//INTERNAL IMPORT


const Loader = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: Style.Loader,
        children: /*#__PURE__*/ _jsx("div", {
            className: Style.Loader_box,
            children: /*#__PURE__*/ _jsx("div", {
                className: Style.Loader_box_img,
                children: /*#__PURE__*/ _jsx(Image, {
                    src: images.loader,
                    alt: "loader",
                    width: 200,
                    height: 200,
                    className: Style.Loader_box_img_img,
                    style: {
                        objectFit: "cover"
                    }
                })
            })
        })
    });
};
/* harmony default export */ const Loader_Loader = ((/* unused pure expression or super */ null && (Loader)));

;// CONCATENATED MODULE: ./components/ContractInfoBox/ContractInfoBox.jsx







const ContractInfoBox = (contract)=>{
    const { acceptContract , currentAccount , fundContract , completeContract , approveContract , cancelContract  } = (0,external_react_.useContext)(EscrowContext/* EscrowContext */.G);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " bg-white rounded-lg shadow-lg p-6 mb-6 lg:ml-4 lg:mr-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: "flex object-cover object-right h-5 w-20",
                    src: img/* default.polygon */.Z.polygon,
                    alt: "NFT images",
                    width: 0,
                    height: 0
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-2xl text-black font-semibold mb-4",
                    children: contract.contract.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-black flex text-sm",
                        children: [
                            "Creator: ",
                            contract.contract.assignor
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-black text-sm",
                        children: [
                            "Collaborator: ",
                            contract.contract.assignee
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-black text-sm",
                        children: [
                            "Details: ",
                            contract.contract.details
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-black text-sm",
                        children: [
                            "Amount: ",
                            contract.contract.amount,
                            " Matic"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: contract.contract.accepted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-500 text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Approved"
                        })
                    ]
                }) : contract.contract.started ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-500 text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Approved"
                        })
                    ]
                }) : contract.contract.started ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-500 text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Approved"
                        })
                    ]
                }) : contract.contract.completed ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-500 text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Approved"
                        })
                    ]
                }) : contract.contract.approved ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black px-20",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-500 text-xs lg:text-sm",
                            children: "Approved"
                        })
                    ]
                }) : contract.contract.cancelled ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-red-500 text-xs lg:text-sm",
                            children: "Rejected"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center italic font-semibold border border-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-green-500 text-xs lg:text-sm",
                            children: "Created"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Accepted"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Funded"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowRightAlt, {
                                className: "mt-0 lg:mt-1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-black text-xs lg:text-sm",
                            children: "Approved"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center mt-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: contract.contract.accepted && currentAccount === contract.contract.assignor ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            btnName: "Fund",
                            handleClick: ()=>fundContract(contract.contract.id, contract.contract.amount)
                        }) : contract.contract.accepted && currentAccount === contract.contract.assignee ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : contract.contract.started && currentAccount === contract.contract.assignee ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            btnName: "Complete",
                            handleClick: ()=>completeContract(contract.contract.id)
                        }) : contract.contract.started && currentAccount === contract.contract.assignor ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : contract.contract.completed && currentAccount === contract.contract.assignor ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            btnName: "Approve",
                            handleClick: ()=>approveContract(contract.contract.id)
                        }) : contract.contract.completed && currentAccount === contract.contract.assignee ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : contract.contract.approved && (currentAccount === contract.contract.assignee || currentAccount === contract.contract.assignor) ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : contract.contract.cancelled ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-red-600 italic text-sm",
                            children: " Contract Cancelled"
                        }) : currentAccount === contract.contract.assignee ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            btnName: "Accept",
                            handleClick: ()=>acceptContract(contract.contract.id)
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-2",
                        children: currentAccount === contract.contract.assignor && !contract.contract.approved && !contract.contract.cancelled ? /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            btnName: "Cancel",
                            handleClick: ()=>{
                                cancelContract(contract.contract.id);
                            }
                        }) : !contract.contract.approved ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-green-500 italic",
                            children: "Contract Completed Successfully"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-black italic text-xs",
                    children: "2% service fee"
                })
            })
        ]
    }, contract.contract.id);
};
/* harmony default export */ const ContractInfoBox_ContractInfoBox = (ContractInfoBox);

;// CONCATENATED MODULE: ./components/componentsindex.js








/***/ }),

/***/ 3368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ img)
});

;// CONCATENATED MODULE: ./img/collection.png
/* harmony default export */ const collection = ({"src":"/_next/static/media/collection.f8dbb93c.png","height":100,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AEIajEQekkoolTMAlwAAlj4Ak2A4n0MYkABHG4pCGpAtAI+GeL+8t9vJv9d4N55BE44ARCSKJgCIx8PX+vn77+3y0srhUACVUSiTAEIiiSUAhufm7P///9fT4K6q00cAo1IpkwBCHog3AIlVOLnHweD////h4O44AKdSK5wAQx+HLQCIuLDb7ery+vr8x8XcNQCqVTGjADcAgF1Np9rY57i0y31xsDMAmUYjn0cilQBQO6liVckrAJoAAJU4AKJaMKM/FoY7FIbqeFyb7YAQFQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/creatorbackground-1.jpeg
/* harmony default export */ const creatorbackground_1 = ({"src":"/_next/static/media/creatorbackground-1.c8c74cb6.jpeg","height":2000,"width":3000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAApQVv/8QAHBAAAQMFAAAAAAAAAAAAAAAAAwABAgQREhMh/9oACAEBAAE/AAU7DKR9k5Ytbq//xAAZEQEAAgMAAAAAAAAAAAAAAAABAxEAAgT/2gAIAQIBAT8A6VkkHdtrP//EABoRAAICAwAAAAAAAAAAAAAAAAIDAAEEERL/2gAIAQMBAT8AwVghPKxoa3P/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/creatorbackground-2.jpeg
/* harmony default export */ const creatorbackground_2 = ({"src":"/_next/static/media/creatorbackground-2.dc0288c8.jpeg","height":2272,"width":3403,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJofI//EABsQAQACAgMAAAAAAAAAAAAAAAECEQAEAxQx/9oACAEBAAE/AO1xx1JRdeCIyTy6Lz//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwABv//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPwBUkd//2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/creatorbackground-3.jpeg
/* harmony default export */ const creatorbackground_3 = ({"src":"/_next/static/media/creatorbackground-3.dda8e415.jpeg","height":1637,"width":2910,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAjDJv/8QAHRAAAgAHAQAAAAAAAAAAAAAAAQIAAwUTFDJCof/aAAgBAQABPwCqSjkWyy6coF8Ef//EABsRAAIBBQAAAAAAAAAAAAAAAAIDAAEEBREh/9oACAECAQE/AMQZMsEEVe6n/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIDEQAEBf/aAAgBAwEBPwDqyvFvSqhoUpz/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/creatorbackground-4.jpg
/* harmony default export */ const creatorbackground_4 = ({"src":"/_next/static/media/creatorbackground-4.34069dc3.jpg","height":4000,"width":6000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAK8Hu//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEBREhMUH/2gAIAQEAAT8AtmdMbssWMsjLz0oB8r//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQJBcf/aAAgBAgEBPwCVYj//xAAZEQACAwEAAAAAAAAAAAAAAAACAwABMVH/2gAIAQMBAT8ADWX1hT//2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/creatorbackground-5.jpg
/* harmony default export */ const creatorbackground_5 = ({"src":"/_next/static/media/creatorbackground-5.6eff6dee.jpg","height":6000,"width":4000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKYPo//EABwQAAAGAwAAAAAAAAAAAAAAAAABAgMEERMxQf/aAAgBAQABPwCUTmS093Y//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Ar//EABkRAAIDAQAAAAAAAAAAAAAAAAEDABMhMv/aAAgBAwEBPwBKxUvTyJ//2Q==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./img/creatorbackground-6.jpg
/* harmony default export */ const creatorbackground_6 = ({"src":"/_next/static/media/creatorbackground-6.d60a6743.jpg","height":3872,"width":5877,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAKgFX//EABwQAAICAgMAAAAAAAAAAAAAAAECAwQAEgURcf/aAAgBAQABPwClyFh4JJdgAvYC+Prn/8QAGREBAAIDAAAAAAAAAAAAAAAAAgABETFR/9oACAECAQE/AA2qzbW+z//EABsRAAEEAwAAAAAAAAAAAAAAAAEAAgMhERIT/9oACAEDAQE/ABDFu8c24Bql/9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/creatorbackground-7.jpg
/* harmony default export */ const creatorbackground_7 = ({"src":"/_next/static/media/creatorbackground-7.fc825884.jpg","height":6000,"width":4000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAp4Z//8QAGhABAAIDAQAAAAAAAAAAAAAAAgESAAMywf/aAAgBAQABPwBvcFNUDM9W8z//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8ADL//xAAZEQACAwEAAAAAAAAAAAAAAAABAgAhIpH/2gAIAQMBAT8AZ7OQez//2Q==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./img/creatorbackground-8.jpg
/* harmony default export */ const creatorbackground_8 = ({"src":"/_next/static/media/creatorbackground-8.2a677ad7.jpg","height":3112,"width":4096,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgb/2gAMAwEAAhADEAAAAJhaj//EABsQAAEEAwAAAAAAAAAAAAAAAAEAAgMEBSFC/9oACAEBAAE/AM9ZaaILoIwR0zS//8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAwQSIf/aAAgBAgEBPwDFREq1C8Bn/8QAGxEAAwACAwAAAAAAAAAAAAAAAQIEABIDBRH/2gAIAQMBAT8A6auiiFH5X3bZh6QM/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./img/creatorbackground-9.jpg
/* harmony default export */ const creatorbackground_9 = ({"src":"/_next/static/media/creatorbackground-9.25c37f88.jpg","height":3112,"width":4096,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQb/2gAMAwEAAhADEAAAAIouX//EABsQAAEEAwAAAAAAAAAAAAAAAAEAAgNBERIT/9oACAEBAAE/AJObYw/SgWYpf//EABsRAAIBBQAAAAAAAAAAAAAAAAEDAAIEEiEj/9oACAECAQE/ALfohZr2cRP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIDMf/aAAgBAwEBPwDYG/Cf/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./img/creatorbackground-10.jpg
/* harmony default export */ const creatorbackground_10 = ({"src":"/_next/static/media/creatorbackground-10.3decca3e.jpg","height":4320,"width":7680,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAtgD/AP/EABsQAAIBBQAAAAAAAAAAAAAAAAECEgAEMUJh/9oACAEBAAE/AHEbgJrHHa//xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIxA//aAAgBAgEBPwDqpfXCf//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMEIf/aAAgBAwEBPwDXC2Gqg9Z//9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/creatorbackground-11.jpg
/* harmony default export */ const creatorbackground_11 = ({"src":"/_next/static/media/creatorbackground-11.7a2d0e10.jpg","height":2718,"width":4100,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAKAp/8QAGxAAAgEFAAAAAAAAAAAAAAAAAgUDAAESYWL/2gAIAQEAAT8AXYrks0YDY9l1X//EABkRAAMAAwAAAAAAAAAAAAAAAAECAwAEIv/aAAgBAgEBPwDTnOkmLoD22f/EABgRAAMBAQAAAAAAAAAAAAAAAAECAwQA/9oACAEDAQE/AN1aT0uEcjv/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/user-1.png
/* harmony default export */ const user_1 = ({"src":"/_next/static/media/user-1.b02a1a26.png","height":1536,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAiklEQVR42mNISU5KT02uqSrPy8lMiIth6GhvSUtLZmBgqKup6OlqZ0hJTQn3cp5ak58SE15WVsJgpGswt7n88tYl7UXpDk5uDN6ONvPrSzZOaFlQXxLj68nAIK2wZ1b/ve0rd0xpN9HSZPAOCIgO81/bWp4TGRiREMNQWl6SV1gQERKYnp5SWFwAAFrxMcJwgXWiAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-2.png
/* harmony default export */ const user_2 = ({"src":"/_next/static/media/user-2.03748091.png","height":961,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42k2PS4rCUBBFazndO+lpT/tD9x78ITpyAWoUJ4LgAvyBG9DsQEH8YgySRMUENYjWe5Jrnqh4oKCouvdSRQoA73wWujGxxXxsifOJdTV7LleW6xUSDfxQDl+UhRarw1luvZuIWejFZBPxjwobYwvmbIXUZ5Xz0RpUEi2mtvwOXWE0FPLCmAxM/JOG0CDJnDnyl/IY9RcAAhx8H8Oegb+HQArZ1eJ1lNItxp1yps25SA2CRfd25Mbx3MPuiAf+/oi17bmvn7wB6ARBwKpUr2ZERFcpusWd07XuxQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-3.png
/* harmony default export */ const user_3 = ({"src":"/_next/static/media/user-3.0c3c10f4.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AGNteFBWYAAeJQAZKwAIJh4pMjc1O0tTXQBVXWI7RU4UJS9/X1iPal1MPz0nKzZfXWIAMDtAQENHg2lpwpOI3KSOo21XYUZDenR2ALC8yniDlbyTjMKZlOGvnMeOdo9iSYh4eACXp7+Ed3qUa2O0fn7cloKzeWK2jHJFPT4AsKWlrYdwQjQ5wY6ExIx4oW9TyqCJloJ/AKaYk009QX1bS3hPPEM6N8KYfLWWha+ZlAB7hZg1Hi5rT0SSZE5gT0qzl4qplI+diIS4flPq9kFIKAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-4.png
/* harmony default export */ const user_4 = ({"src":"/_next/static/media/user-4.ddc2e626.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AJewz42pyntpb7d8ZY9aSgAAAH2RqpOtzgBnga03VnzVmH7/vqfIhnAqAAAZHyxTapIAKj93Kx03rnZZ3Z2Bm2FHUzMpAAAAIyJIACMrYUojI9idgdmageWjh5FaSAAAAC0eKQAxL1ohAADXlXbYh2/QhGSAQywAAAAkEhEANSMxAAAAf0sw3JBwpmZMSRwJAAIFGgsJAFQoID4YFQAAAJtdO49RMAAAACEOCBcGBABuODNCFQ4AAACCTTO5cEwAAAAmDwocCQg8SjtOREhf6gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-5.png
/* harmony default export */ const user_5 = ({"src":"/_next/static/media/user-5.52345078.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AEhZU0FSTSAZFHtfS6qKdnJfUkhgYFpsagBNXVc1RUIwCQCyk3zdxbfFrJ9KWVRcbGkAUF9ZMEE+Ykk3oIVyy7SnzLWod3ZtU2djAFRhWR40MohqV5R1ZM+xpePIupeOhUliXwBOXFVEV1JpTjqXb17bvrPJrp5odG9ba2cARVZRT2BbDyIejG5d0ruus6GSRl5XY3FtAEBTTzlNS0o2KGlLL8Kqmc/Hw3aKkFhnYQA/U1c1Rk1DRUilj3/ArJy7ydTB1eWhs8F6+FWTXiAiywAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-6.png
/* harmony default export */ const user_6 = ({"src":"/_next/static/media/user-6.cf47f5ac.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AAwMCR8SDV0lDU0cFGswHmosFi4YDwQKCgAACQ0gAAC+fV3HdlDCZzGeUCBWKxkAEhgARCgYaUApp3puzpWBzpyMom1dajceAAAAAFozFqhfNd67tOvOyO/Wz9+7saRkR8q1qABOMSBdGQDFopnwyL7wyL/FpZ1xNROnjXgAJxcTAAAAjVU/5r2u6Mq/u39ls2QsajsKAFMsGVgwH5lDCeKJde6+r6lwWqtiMpZjQgAmFxY8Kh9vQzPpKwD9MQCcHRlHNCSMVTEuXEiycEbOkAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-7.png
/* harmony default export */ const user_7 = ({"src":"/_next/static/media/user-7.ba04f751.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ADUwMmNgX4J/fZCMjJSQj5CMiW1paFVQTgCXk4pnW09ZRjtzYV1eSUVIMiuXjIJ/enQA8vDpmZCEZlFM1rSnxp2Nd1JF3b+p5tnIAN/a0o2KhH1kW9euntChkH1fUysZGpKEdwBZVFFvdXxrZmLOm4nOloJNLxRVVFpbZW4Ac3d8oqGlgWFpvYVvtYBlAAAAUUdFjImLAIqAhpFTX5MAJ5IAIHoJGloIGD4AB3VmaQBxWV9xAACPAySTBCiOACSICCRuAABxSlD8IFFKnHSZ5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-8.png
/* harmony default export */ const user_8 = ({"src":"/_next/static/media/user-8.a9a0d423.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AK6bkbWlnLCelYV6d310crOjmr6qnquXjACtopy2qaFuZGFUUFGPdmxmX1y5p563pJsAsaSeuKadTD8zYz8tn3dicVRBoI+Fv6mfALOlnrOflK2AZ8ylkNivlbOPdYNsYMKrnwC3pp+4opWoeVrPpZXOnYSFXD6gjICunpYAsKagup2RkGpPrYt3u5BykG1NvaWUq52UAMOGbLdnQm86Jl84IHI9IotgRtONZ8eKbACJRCN0PCZ/PiaTUjibTS6tXTi8YzOjUShFi2OkwCgu0wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-9.png
/* harmony default export */ const user_9 = ({"src":"/_next/static/media/user-9.400dc424.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APzi3fPY0k9BPwAAAAAAAEM3MvDUzv3f2QD/5+HfyMIAAADEkn9uT0EAAADqz8r/4t4A/+nj2MC7hVQ5xpJ+o3NgAAAA3MO+/+bhAP/n4tW7tsWCYeCljNKTeZ1sWezSzf7i3gD94tzhxL7bpZTbj3HFdFXFmo794Nr529YA4MbDua2wqoh7wHdSekEmd2Vj887H/9rSAE91kGaOpcaonsSOb5FnUSVZcF1tgsOqrQBmg5dPfZnMt7L/0LmxlI47a4VGbYUeUnITPnNR9YmmnAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/user-10.png
/* harmony default export */ const user_10 = ({"src":"/_next/static/media/user-10.8d5375a2.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AL2ytLSrrlhNU35hYm1WVQAAAG9rb7qytwDc0tXFvsKliYvGm5jGmZWJXVp7en3SyMwA3tbZ0sHFl3d4iWdpjWpsYTk6qZyfxLq+AKaen6uWmMaZm76Rk6R0eZRhY5F+hKqjqQBMSUY+Oz2xjJCTZm6PYGSJYWQfMmALMWMAUE5UAAAAjnF3hV5nd1NYSzYzAAxCACtxADY3QAAAAGFPV1xITlxDRxcAAz8/RJeUogCamKRHSFEAAAA/MjgrHCAwND2EgouNjZqNjFOi8LuiEgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/service-1.png
/* harmony default export */ const service_1 = ({"src":"/_next/static/media/service-1.ea966650.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42mPAB468vMPI8N+AgfHDk+UyD24dS3xw+WDe/UsH8u7cOJT86v89LrCq/y8Y2I+e3X51ybX7/1feuP9/yeXb/+dfuvN/2oX7S+BG9Z5/cGjCltP/mw9c/DFj/ZEf1bsu/W87efMEXEHHyTsXmzac+J+66fif0oW7/tQt3/e/cs+Z83AFTQevJRfsujR97fL9v1ct2fM7efGB6cnLDieDJdccucoIU/h224GJ77YdnAjjT1iyByLXeuIOc9/ey6xwE1ceZk1bd5yZgYGBAQCk42826cOvVwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/service-2.png
/* harmony default export */ const service_2 = ({"src":"/_next/static/media/service-2.0193bdad.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgbnXXjEy4AJ9+y8wgenDV9VmHr96aPKRy9ebd55pAonNu/aMmaHn8FUWEKfj6G3/6aeu/594+OL/5j0XtoPEljz7zsyw/fw+sIKNZ/aW7z6/7f+E/bv/x8zeOAsk1rl5LwvD7mOLIAqOrpq0bUfL/8SJXf9zSnp2M4DBXkaG4lXbWUHMnJXbW7Imz/1fVFLzf2Zt9ev/1xjYwGpipm8COzJy2mbj0M6li5LzqlYWpEe7gsQyU/OYGMCMrZcxvNlVXg4WAwBky1nGI0+r5wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/service-3.png
/* harmony default export */ const service_3 = ({"src":"/_next/static/media/service-3.08f7566e.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42mMAgefXNjCC6Hf//zP/AmKI2HpGiOSFyWDGi2uz2Z6f7d/x9HT3jhdXprKB5c5NYGR4dKKbCcy5Mkf8ycm2/4+ONv1/dnGGOEjs0UmwHAJ8urbY4sOVhRYogms29HPdXsJg33zmYdL8U3eur79w/9r6m8/STk1icFh+5Cgrw72jJ4Qfbt20qn7HscaaZZv/d6ze/n/JsfM9d9auWX7t6HlOhvenrvLd3XSorjozTDIpIakuLjGlqr+yXOHGip01H09dYWcgBABXD2i4q5badgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/service-4.png
/* harmony default export */ const service_4 = ({"src":"/_next/static/media/service-4.e655ff94.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42mMAgWcv3zAyYAEvLs5gYnj2/DlY8vXr145vXr9QfH2pP+nlxWnrXl6aZgFX+fLlS8uXr17/f/H86a/nF+f+f3629//z81Pv/f//nwms4Pnz5+tu3Lj5/9qNO3/vnlrz88H+wv8Pj/cdAUueOXNO6sHDh+9BCm7fufvj4YN7/++c2XLnNgMDG1jByZOnZc+eO//5wMHD/48fP/n/2IlT/y9cvgEUPrd38+atpgy7du/VqalvP5uYUnApKjZ1e3Zuyfqp02Zd7OuferWsssmYAQbOHluB7FUmGAMA6FqBlZVPVrcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/logo-light.svg
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo-light.613d97a2.svg","height":46,"width":140});
;// CONCATENATED MODULE: ./img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.365339f3.svg","height":46,"width":140});
;// CONCATENATED MODULE: ./img/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.b22e79d5.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.d12eec73.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.a3c75624.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.bcae2a7a.svg","height":135,"width":136});
;// CONCATENATED MODULE: ./img/vimeo.svg
/* harmony default export */ const vimeo = ({"src":"/_next/static/media/vimeo.dbc55b45.svg","height":136,"width":136});
;// CONCATENATED MODULE: ./img/VectorHIW.svg
/* harmony default export */ const VectorHIW = ({"src":"/_next/static/media/VectorHIW.be5444ab.svg","height":105,"width":1431});
;// CONCATENATED MODULE: ./img/zgcmq.svg
/* harmony default export */ const zgcmq = ({"src":"/_next/static/media/zgcmq.01b8cd56.svg","height":99,"width":281});
;// CONCATENATED MODULE: ./img/hero.png
/* harmony default export */ const hero = ({"src":"/_next/static/media/hero.33d7bcf0.png","height":1152,"width":768,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAiUlEQVR42mOwkjLsNssO5kgLUQlSFZRn6POO73ZsKQ1dHqEXnW7qwLAmLrvHqjHPd42/THyZuT/Drpz07qDKeOU2N+O8YuskhnU5yTPTZk0vmGjt15Bm78mQaea/NzO9JThaWcHeTtaAwV5BfU9KTZhBrZ9qmpoEG0NnsPOa+DRBBvd4U093LS0AjG4pFPMi7bEAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./img/nft_1.png
/* harmony default export */ const nft_1 = ({"src":"/_next/static/media/nft_1.0fb51805.png","height":933,"width":933,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APukyf+mzf6lzPWhvfmiw/+nzfykyvqjyAD1ocbck6vQjJPHna+4jrDLiqb0nsD8pcoA+6XKw3p71cTB2MnmwKbMrJqu7Z++/qXLAOeXtLV2bO/n6M7K3LapxaCZs+uiwP2jygDbjaugUkvm4uXm5+y+vcWEjJTNjKT/pswA9KDFzXSDw7q8xsfPnp+rnIud9KDD/KXKAP+ozrN6kyA/RFlWXk9MViA5P8aBn/+nzQD8pcrDsr1HVFtLSFJNSFMANDmzhJr/qM6ywIIIeUJfDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/getable.png
/* harmony default export */ const getable = ({"src":"/_next/static/media/getable.aedc625f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXz9/ny9vnw9Pfv8/bu8vXu8vTt8fTt8fPs8PPr8PLs7/Ps7/Lr7/Lq7vHn6+/m6u7l6e3i5urg5eng5Onc4eXb3+Ta3uPZ3uLR1tvDyM6ip7J8gpM0WamNAAAAQUlEQVR42hWJSQ6AMBDDApQhhbSUffv/P5laPlgyKLlRSBbkELj2bggU1vc7y5GJ5bnnsmWhb1qzupRU8eA4MVI/a9sC89IkkxkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/nft-image-1.png
/* harmony default export */ const nft_image_1 = ({"src":"/_next/static/media/nft-image-1.0fb51805.png","height":933,"width":933,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/APukyf+mzf6lzPWhvfmiw/+nzfykyvqjyAD1ocbck6vQjJPHna+4jrDLiqb0nsD8pcoA+6XKw3p71cTB2MnmwKbMrJqu7Z++/qXLAOeXtLV2bO/n6M7K3LapxaCZs+uiwP2jygDbjaugUkvm4uXm5+y+vcWEjJTNjKT/pswA9KDFzXSDw7q8xsfPnp+rnIud9KDD/KXKAP+ozrN6kyA/RFlWXk9MViA5P8aBn/+nzQD8pcrDsr1HVFtLSFJNSFMANDmzhJr/qM6ywIIIeUJfDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/nft-image-2.png
/* harmony default export */ const nft_image_2 = ({"src":"/_next/static/media/nft-image-2.3cb565cf.png","height":800,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA20lEQVR42gWAP0rDUBjAf9+XhDQm6R9KLUixCEpRBMGKoHsv4AVcdOgJnNycPIiz4OLirF6gk4NFChaFmIZUSvveK8Lbg8P3wAkYwIMaltxY/K4I3aygJwt3Ff7yVNblTqq0kwr+GLjPCns+epRGMrH1v1Rejy/lpRaLjyjPzQ0GnUPm1YEG8TeTzSasDIpzvFci/Tzp0zjryfRgl34+AxH8FpaRBtx8bXExdnaYRNCeabhy6I8YmG7zUe4wLFrsZftKmTpVgybW4zYOXSdYymka6dGicNf5nH9V1gNlSYvVkEAIAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./img/nft-image-3.png
/* harmony default export */ const nft_image_3 = ({"src":"/_next/static/media/nft-image-3.bde7a45f.png","height":800,"width":700,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA10lEQVR42hXMQUrDUBRA0ftevjVtCrViLShRxGGcKbgBcQduwAW4F/fgApyJTnTiVAeigkJBsDjIIInyG2zCf6VnAUfCxaWJKJhgM5AYcIaFgBMVirZG47klR5560pUw7TJIVnG00OyqFdmDbQ5f7SMeMsrPooH1cJiwVgqfW4e8uxMZp4XtuP7yFSUy1EMnz6RKDnTD72nV/4cWHALRTCWdfoXtUUP8+GPr5Vit06BUEf70267qa7Lzm/ByfCu2/wdeUXrGb5Jzdx8on1bC89tEmrQyqZUFS8hYVAhTeucAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./img/musicwave.png
/* harmony default export */ const musicwave = ({"src":"/_next/static/media/musicwave.485b7934.png","height":29,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAH0lEQVR4nGP89++fJAMDww8gZgHif0AMAkxA/AeIOQCNzQYV2y9GCAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./img/update.png
/* harmony default export */ const update = ({"src":"/_next/static/media/update.3bac6033.png","height":803,"width":1120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Af/+/wAAvMNy3wLqVgoFB40I2e0TEGZgmP+0uQD9+fsAAf+6wHj07uyHxBH1ABkDFAAAzt36DR0YxCIOEQD8+PmYAf+4vdnt7ewmyP/4/BwwMgOora0BMx0fAFANFQD8+fgAAf+1vc39AgAy1BQN/f4AAQHp6OgA7Ovg/k8DGQQM/P7qAceIiLYFEhZJ5x4cABkSEAD5+vYAGwquAPDxQQD35/x6AQBFNrmGS1kfS0JE+QABAQHs5+MF8+CTFr4MQPqSHRZXLPBbu5RBWVoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./img/eran.png
/* harmony default export */ const eran = ({"src":"/_next/static/media/eran.5cae6c26.png","height":755,"width":1062,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAtklEQVR42mOAgfVdC2t3n7rTCWYzMDDBJRrOXnUA0Su2vj0/d/2N/+Vb5huA+NNPXmJZ8fwdE0PxhRuHnl+aMPH91oZvN0tS/p9a2+/IgAxqLt4J/3oo5fqvPYb/v24p/nfq8ulGhv//uYFYZOr7/84MIPDrcMCV77u8/r9eGfjo3tZs1/9n3epfXZy659Stk0cYug/8F3h3qGX7tz2Rnz+sz7r64XDb8W+Hk/9/2pDy//Pq2GAAvCxihqaVOzIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./img/nftvideo.png
/* harmony default export */ const nftvideo = ({"src":"/_next/static/media/nftvideo.2f14968d.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mOQ0rGT17dnYpXml9QxsYw31AtgUHRnEDJlsDSxSk1Jz8rOtfMMysw/kpm2vCghOS4wmUFbz9EypEBZz9TczHX5lJt9nTtntRbWF+QxSCgaK1kFMIiqOtj79hceKStcGpBU5WGVzCAkoSqvoCGrYiCtYsgtw8BhbC+V0Ciu5wIAOSsh2LLKHrEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/hero2.png
/* harmony default export */ const hero2 = ({"src":"/_next/static/media/hero2.8db4268a.png","height":407,"width":688,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AfzDzaADAQAYvP3/+ZvwBEsZC/YA//kItS3gBAf8CQLoAfm9x+/1AvsQ6ecN6ubx5xX/AdcA0Qs46wfz/Bb6/PfwAe27wN/b9/cgDQUY3/zrtx3j8ekAzwRA4/3q9yH4A/zgAeaytO/8APsQ9wME7NK4nhTf//UA9y1e7ALpDRT+EAbwAfO4v2cMDw8O5uPSCLi3nk75+/UA7BJgsh02R/gA9/byyMBcHamINV4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./img/upload.png
/* harmony default export */ const upload = ({"src":"/_next/static/media/upload.5644ab9e.png","height":230,"width":230,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42iXHKwoCARhG0W9jgsFsFtyBwWwwuh13YBMEi00wiGJ0sPtg5vwOzD3pxshD4aNzN4qbstUonXKNfhNL5avVBk8LR6XnF29lMLNWURpzO5v0OcXLKhkydY6xvaODnovJHxpVZfoSFjnUAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/provider-1.png
/* harmony default export */ const provider_1 = ({"src":"/_next/static/media/provider-1.8b58862c.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mMgCApctRWnh8ofvF2rkvl/tp7a/5m6qi9b1KPmRcrvLXFV02foCdYyrHaW+N/lI/n/aavi/7ddiv+nBkr/r3YW/98ZoObEEOJgJ9ATIPdoWSTf/+dNnP/etPH/XxXN8b8nQPZNtouRDMOz6aEc3yaI3nzXbfH/7QSf3x8nuv553e30/9sE/idvprgIMbzv0bF83yH5/2Wrzv/Hndb/77Ua/X/Zbvr/Xbvo/w892m4Mj9ocJZ7WChx+2hO0YNfiqTdWz5n0+MnUtPlPqhkOPG53VGBABv///+f4/+ctL7IYAIBmal3I5EuCAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/provider-2.png
/* harmony default export */ const provider_2 = ({"src":"/_next/static/media/provider-2.b4b9aacf.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvklEQVR42mOAgDeMDOhA6T0TlPUZwoj4Gs/g8/UsQ8DXMwzRX8PBYrZQOYaQD2FeBZ/+Hz798/zuIz9PO2Z/+s8Q/sEbbhpryOsj6Q1vazbt+pC5YceH0LCSN+2CYa93whUohz/fxuDzdAoDwxNuBobnnAz+TxcrhT9bCVcgFfhYXzbw0X/V4AerlYLub5IJfPRHOvixKlhSzO8hM4iWDbitKu57dwYQT5UNvK0AEpPwB8pBGI+Y4cbBTYWIAQCvwUmcBZbmxQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/provider-3.png
/* harmony default export */ const provider_3 = ({"src":"/_next/static/media/provider-3.d24d39c0.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAl0lEQVR42mWPSwrCMBRFY+w2XIOjDizYRlHwM3LsDtyKdFTBNm3BDahjl2ZfFE/FDIIHDlwu3BeiPGklw2/I34PU/rInqRxFyLQf+IUCY+WQWbnibWZlryA+O61WTRctG0kWtWwxQ4MbjHeXJ2NgXbLM8YF3PNEdgzcp23ktY84bcqE867bjzD+j4hX2k9JFLDXf1X32/QdXukiLNMNVpQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/provider-4.png
/* harmony default export */ const provider_4 = ({"src":"/_next/static/media/provider-4.8f6a227f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ACsrLFVSUU5cYUFRV0JQVkpbYFdXVzAwMABlX12lfmvYt6ni08zi08zdvrGthXJoX1wAZlhSfkYbhDQA54gr740ukEAAez0AaFZOAHd1dZ1zXqRTAOaBCeyFCqhWAJtuVXx5dwCEf332pGfthyfskU/xkkjqiDf4oV2QhoEAiV9F9IoU630A5Yg04IUu64AA9IgAlmZJAH9wauCVat2pkbilmaibkdytmOGYbop4cAAsLS1PT05NYGVSU1JWUk5NX2RPU1QvMDDfslfu3itwUQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/founder1.jpg
/* harmony default export */ const founder1 = ({"src":"/_next/static/media/founder1.89bf8253.jpg","height":800,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAAI4un//EAB0QAAICAQUAAAAAAAAAAAAAAAECAwQRAAUTUVL/2gAIAQEAAT8AvPBX3AOhTjkhFdUBOV6OPGdf/8QAGREAAgMBAAAAAAAAAAAAAAAAAjEAAQMR/9oACAECAQE/AB0LpU1P/8QAGREAAwADAAAAAAAAAAAAAAAAAQIDABEx/9oACAEDAQE/AK0rAIkqui64pz//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/founder2.jpg
/* harmony default export */ const founder2 = ({"src":"/_next/static/media/founder2.a7d9e122.jpg","height":640,"width":640,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALBf/8QAHhAAAQIHAQAAAAAAAAAAAAAAAQIEAAMFBhIUg9L/2gAIAQEAAT8ARcbZ7W2gwCV75kcwPUf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQIBAT8AyF//xAAYEQACAwAAAAAAAAAAAAAAAAAAARExYf/aAAgBAwEBPwCaxH//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/founder3.jpg
/* harmony default export */ const founder3 = ({"src":"/_next/static/media/founder3.b25ed8c4.jpg","height":1915,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAuCjv/8QAHxAAAQEJAQAAAAAAAAAAAAAAARIAAgMEBRETMWGx/9oACAEBAAE/ALUESZDqMBgK1z1Tf//EABoRAAICAwAAAAAAAAAAAAAAAAECAyIAEkH/2gAIAQIBAT8AhhDb3cW4c//EABoRAAIDAQEAAAAAAAAAAAAAAAERAgMTAAX/2gAIAQMBAT8A8+vWknScEUoFDv/Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/founder4.jpg
/* harmony default export */ const founder4 = ({"src":"/_next/static/media/founder4.88a6a7ed.jpg","height":1280,"width":977,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIiT/8QAHBAAAwACAwEAAAAAAAAAAAAAAQIDEiEABAYT/9oACAEBAAE/AE9O8ZT7f1L0uXGAbaKmhlz/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMUQv/aAAgBAgEBPwCtC8H/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhKx/9oACAEDAQE/ALbD/9k=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./img/loadergif.gif
/* harmony default export */ const loadergif = ({"src":"/_next/static/media/loadergif.fa75fcc7.gif","height":1080,"width":1080});
;// CONCATENATED MODULE: ./img/error.gif
/* harmony default export */ const error = ({"src":"/_next/static/media/error.bd85ffe2.gif","height":1080,"width":1080});
;// CONCATENATED MODULE: ./img/transfer.gif
/* harmony default export */ const transfer = ({"src":"/_next/static/media/transfer.99a5c983.gif","height":500,"width":500});
;// CONCATENATED MODULE: ./img/ethereTransfer.gif
/* harmony default export */ const ethereTransfer = ({"src":"/_next/static/media/ethereTransfer.10c661f6.gif","height":500,"width":500});
;// CONCATENATED MODULE: ./img/logo.png
/* harmony default export */ const img_logo = ({"src":"/_next/static/media/logo.a9814022.png","height":1563,"width":1563,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPklEQVR42mPACv7J/2MBQnkYV/3f3H+5/1KBpDpEQOXf1H/R/5L/Tf+nAuIyArHyPwEgVADxYNq4/3EzEAkAKJsdHmUVT+4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./img/metaverse.jpg
/* harmony default export */ const metaverse = ({"src":"/_next/static/media/metaverse.c8624a82.jpg","height":745,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAIgNf//EABwQAAICAgMAAAAAAAAAAAAAAAIDAQQAEQUSsv/aAAgBAQABPwC4XEtQqzVQ0BmddC16z//EABkRAAIDAQAAAAAAAAAAAAAAAAEDAAIREv/aAAgBAgEBPwBFjYM6O4wif//EABkRAAMAAwAAAAAAAAAAAAAAAAECAwAREv/aAAgBAwEBPwC6IpnyoG5gnP/Z","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./img/polygon.png
/* harmony default export */ const polygon = ({"src":"/_next/static/media/polygon.170278f3.png","height":903,"width":2560,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYUlEQVR42mOosnusWG3/RIoBCHTFI9jZuZj5uLh4mLi4eNm5uHlYGSrtHlrVOb5OiNRd7gpUkyDEqxQPlMwBKkoG0sYMIFDr8EI+w/SQNJDJoi8RwwqUkODk4mFnYGBgAACogRCl3rfm/QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./img/sketch.png
/* harmony default export */ const sketch = ({"src":"/_next/static/media/sketch.ccba35f9.png","height":526,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42mNAB2//M7A+vvn5wPMn7wPAAj+//VH9+e2v+a8ff5R/f/gvdO3/Mt039/5p3v15WPfOvx1SDD+//zEFYq9f3/+q/Pz+W/DKpauTQRovX7yScuPazQCGX9//sP349pMNJLj/+gqWDWs31d/5dsRt/+Hd9Zs2bHEEAJiQR3u+RnwYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./img/index.js































































/* harmony default export */ const img = ({
    logoHome: img_logo,
    hero2: hero2,
    founder1: founder1,
    founder2: founder2,
    founder3: founder3,
    founder4: founder4,
    provider1: provider_1,
    provider2: provider_2,
    provider3: provider_3,
    provider4: provider_4,
    upload: upload,
    NFTVideo: nftvideo,
    earn: eran,
    collection: collection,
    update: update,
    musiceWave: musicwave,
    nft_image_1: nft_image_1,
    nft_image_2: nft_image_2,
    nft_image_3: nft_image_3,
    getAble: getable,
    nft_1: nft_1,
    hero: hero,
    creatorbackground1: creatorbackground_1,
    creatorbackground2: creatorbackground_2,
    creatorbackground3: creatorbackground_3,
    creatorbackground4: creatorbackground_4,
    creatorbackground5: creatorbackground_5,
    creatorbackground6: creatorbackground_6,
    creatorbackground7: creatorbackground_7,
    creatorbackground8: creatorbackground_8,
    creatorbackground9: creatorbackground_9,
    creatorbackground10: creatorbackground_10,
    creatorbackground11: creatorbackground_11,
    user1: user_1,
    user2: user_2,
    user3: user_3,
    user4: user_4,
    user5: user_5,
    user6: user_6,
    user7: user_7,
    user8: user_8,
    user9: user_9,
    user10: user_10,
    service1: service_1,
    service2: service_2,
    service3: service_3,
    service4: service_4,
    logo: logo,
    logoLight: logo_light,
    facebook: facebook,
    telegram: telegram,
    twitter: twitter,
    vector: VectorHIW,
    vimeo: vimeo,
    youtube: youtube,
    zgcmq: zgcmq,
    loader: loadergif,
    errorgif: error,
    transfer: transfer,
    transferEther: ethereTransfer,
    metaverse: metaverse,
    polygon: polygon,
    sketch: sketch
});


/***/ })

};
;