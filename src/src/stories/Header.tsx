import './reset.css'
import './scss/utility.scss'
import './scss/atom.scss'
import './scss/molecules.scss'
import './scss/organisms.scss'

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