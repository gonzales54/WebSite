import './reset.css'

const Main = ({isNavOpen}: any) => {
	return (
		<main className={isNavOpen ? 'main main-open' : 'main'}>
			<section className='main-visual flex justify-center align-items-center'>
				<div>
					<h2 className='main-title'>Itokawa WebSite</h2>
					<p className='sub-title'>Studying Software-Engineering</p>
				</div>
			</section>
			<section className='about flex justify-center align-items-center container-md'>
				<div>
					<h2 className='section-title'>About</h2>
					<p className='about-content'>
						このサイトは作ったアプリやサイトなどを載せるポートフォリオサイトです。<br />
						React、Vue、Laravel、PHP、TypeScript等について勉強しています。
					</p>
				</div>
			</section>
			<section className='work container-lg'>
				<h2 className='section-title'>Work</h2>
				<ul className='grid'>
					<li>
						<a href="">
							<div className='work-item'></div>
							<h3 className='work-item-title'>title-link</h3>
						</a>
					</li>
					<li>
						<a href="">
							<div className='work-item'></div>
							<h3 className='work-item-title'>title-link</h3>
						</a>
					</li>
					<li>
						<a href="">
							<div className='work-item'></div>
							<h3 className='work-item-title'>title-link</h3>
						</a>
					</li>
					<li>
						<a href="">
							<div className='work-item'></div>
							<h3 className='work-item-title'>title-link</h3>
						</a>
					</li>
					<li>
						<a href="">
							<div className='work-item'></div>
							<h3 className='work-item-title'>title-link</h3>
						</a>
					</li>
					<li>
						<a href="">
							<div className='work-item'></div>
							<h3 className='work-item-title'>title-link</h3>
						</a>
					</li>
				</ul>
				<a href="" className='work-link'>制作したアプリやサイト一覧</a>
			</section>
		</main>
	)
}

export default Main