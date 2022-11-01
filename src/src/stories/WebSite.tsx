import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import WebSiteImageURL from "./assets/website.jpg"

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
	const work = [
		{
			title: 'react-website',
			image: WebSiteImageURL,
			url: '/'
		}
	]
	return (
		<>
			<Header isNavOpen={isNavOpen} navOpen={navOpen} />
			<Main isNavOpen={isNavOpen} workItem={work} />
			<Footer />
		</>
	)
}

export default Website