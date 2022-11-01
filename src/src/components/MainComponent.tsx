const MainComponent = ({workItem}: any) => {
	return (
		<main className='main'>
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
				<ul className='grid' style={{ gridTemplateRows: workItem.length > 3 ? '1fr 1fr' : '1fr' }}>
					{
						workItem.map((item: any) => (
							<li key={item.title}>
								<a href={item.url}>
									<div className='work-item' style={{ backgroundImage: `url(${item.image})` }}></div>
									<h3 className='work-item-title'>{item.title}</h3>
								</a>
							</li>
						))
					}
				</ul>
				{workItem.lengt > 6
					?
					<a href="" className='work-link'>制作したアプリやサイト一覧</a>
					:
					""
				}
			</section>
		</main>
	)
}

export default MainComponent