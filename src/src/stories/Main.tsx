import './reset.css'

const Main = () => {
	return (
		<main className='main'>
			<section className='main-visual flex justify-center align-items-center'>
				<div>
					<h2 className='main-title'>Itokawa WebSite</h2>
					<p className='sub-title'>Studying Software-Engineering</p>
				</div>
			</section>
			<section className='container-sm'>
				<h2 className='section-title'>About</h2>
			</section>
			<section className='container-sm'>
				<h2 className='section-title'>Work</h2>
			</section>
		</main>
	)
}

export default Main