const HeaderComponent = ({ isNavOpen, navOpen }: any) => {
	return (
		<header className='header'>
			<div className='container-lg flex justify-between align-items-center'>
				<h1>
					<a href="" className='block logo'>Itokawa</a>
				</h1>
				<button className='nav-btn sp-only' onClick={navOpen}>
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
					<ul className='flex'>
						<li className='nav-item'>
							<a href="/" className='block nav-link'>Home</a>
						</li>
						<li className='nav-item'>
							<a href="#about" className='block nav-link'>About</a>
						</li>
						<li className='nav-item'>
							<a href="#work" className='block nav-link'>Work</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default HeaderComponent