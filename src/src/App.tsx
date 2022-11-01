import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import WebSiteImageURL from "./assets/website.jpg";
import './assets/reset.css';
import './scss/utility.scss';
import './scss/atom.scss';
import './scss/molecules.scss';
import './scss/organisms.scss';
import { useState } from "react";

function App() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);
  const navOpen = () => {
    setNavOpen(!isNavOpen)
    if (isNavOpen) {
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
    <div className="App">
      <HeaderComponent isNavOpen={isNavOpen} navOpen={navOpen} />
      <MainComponent />
      <FooterComponent/>
    </div>
  )
}

export default App
