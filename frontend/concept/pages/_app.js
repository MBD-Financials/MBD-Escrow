import "../styles/globals.css";
//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { EscrowProvider } from "../Context/EscrowContext";



const MyApp = ({ Component, pageProps }) => (
  <EscrowProvider>
      <NavBar />
      <Component {...pageProps} />
  </EscrowProvider>
);

export default MyApp;
