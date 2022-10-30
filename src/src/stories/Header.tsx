import './reset.css'
import './scss/utility.scss'
import './scss/atom.scss'
import './scss/molecules.scss'
import './scss/organisms.scss'
<<<<<<< HEAD
import { useState } from 'react'

const Header = () => {
	const [isNavOpen, setNavOpen] = useState(false);
	return (
		<header className='header'>
			<div className='container-lg flex justify-between align-items-center'>
				<h1>
					<a href="" className='block logo'>Itokawa</a>
				</h1>
				<button className='nav-btn sp-only' onClick={() => {setNavOpen(!isNavOpen)}}>
					{isNavOpen 
					? 
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="nav-icon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
					: 
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className='nav-icon'>
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
					}
				</button>
				<nav className={isNavOpen ? 'nav nav-open' : 'nav'}>
=======

const Header = () => {
	return (
		<header className='header'>
			<div className='container-lg flex justify-between'>
				<h1>
					<a href="/" className='block logo'>Itokawa</a>
				</h1>
				<button className='sp-only'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className='nav-icon'>
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
				<nav className='nav'>
>>>>>>> ed2591bd9749c434405703836a00a307d3c7e389
					<ul className='flex'>
						<li className='nav-item'>
							<a href="" className='block nav-link'>Home</a>
						</li>
						<li className='nav-item'>
							<a href="" className='block nav-link'>About</a>
						</li>
						<li className='nav-item'>
							<a href="" className='block nav-link'>Work</a>
						</li>
						<li className='nav-item'>
							<a href="" className='block nav-link'>Skill</a>
						</li>
						<li className='nav-item'>
							<a href="" className='block nav-link'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header