import TwitterIcon from './assets/twitter.png'
import './reset.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container-md">
				<div className='footer-content'>
					<h3 className='footer-logo'>
						<a href="">Itokawa</a>
					</h3>
					<ul className='footer-container flex justify-center'>
						<li className='footer-item'>
							<a href="" className='footer-link'>Home</a>
						</li>
						<li className='footer-item'>
							<a href="" className='footer-link'>About</a>
						</li>
						<li className='footer-item'>
							<a href="" className='footer-link'>Work</a>
						</li>
						<li className='footer-item'>
							<a href="" className='footer-link'>Skill</a>
						</li>
						<li className='footer-item'>
							<a href="" className='footer-link'>Contact</a>
						</li>
					</ul>		
					<div className='social'>
						<h4 className='social-title'>SNS</h4>
						<div className='social-container flex justify-center'>
							<a href="" className='social-link block'>
								<p className='social-icon '>
									<img src={TwitterIcon} alt="" className='block'/>
								</p>
							</a>
						</div>
					</div>			
				</div>
				<p className='small'>
					<small>Made By Itokawa</small>
				</p>
			</div>
		</footer>
	)
}

export default Footer