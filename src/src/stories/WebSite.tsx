import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

const Website = () => {
	const [isNavOpen, setNavOpen] = useState<boolean>(false);
	const navOpen = () => {
		setNavOpen(!isNavOpen)
		if(isNavOpen) {
			document.body.style.overflow = "auto";
		} else {
			document.body.style.overflow = "hidden";
		}
	}
	return (
		<>
			<Header isNavOpen={isNavOpen} navOpen={navOpen} />
			<Main isNavOpen={isNavOpen} />
			<Footer />
		</>
	)
}

export default Website