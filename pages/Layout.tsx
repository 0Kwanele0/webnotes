import { AppProps } from "next/app";
import { useContext, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubNav from "../components/SubNav";
import SubpageContext from "../context/subpages"

function Layout({ children }) {
  const subpagesContext = useContext(SubpageContext)
  const [page, setPage] = useState(1)

  return (
    <SubpageContext.Provider value={{ page: page, setPage: setPage }}>
      <NavBar />
      <SubNav />
      <main>{children}</main>
      <Footer />
    </SubpageContext.Provider>
  );
}

export default Layout;
