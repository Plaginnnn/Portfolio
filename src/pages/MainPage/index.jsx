import style from './mainpage.module.scss'
import helloImg from './wave.gif'
import avatar from './avatar.png'
import github from './Github.gif'
import html from './html.svg'
import js from './js.svg'


export const MainPage = () => {
	return (
		<section className={style.main}>
			<div className={style.content}>
				<div className={style.title}>
					<h1 className={style.title_text}>Front-End React Developer</h1>
					<img className={style.helloImg} src={helloImg} alt='hello-img' />
				</div>
				<h4 className={style.about}>
					Hi, Im Rasim. Front-end React developer living in Kazan, Russia.
				</h4>
				<div className={style.icons}>
					<a href='https://github.com/Plaginnnn'>
						<img className={style.icon_github} src={github} alt='' />
					</a>
					
				</div>
				<div className={style.techstack}>
					<h4>Tech Stack</h4>
					<hr />
					<ul className={style.techstack_list}>
						<li>
							<img src={html} alt='' />
						</li>
						<li>
							<img src={js} alt='' />
						</li>
					</ul>
				</div>
			</div>
			<img className={style.avatar} src={avatar} alt='avatar' />
		</section>
	)
}
export default MainPage
