import style from './About.module.scss'
import animation from './1d099585747f73306e91e18339a1052e.gif'
export const About = () => {
	return <section className={style.about}>
		<div className={style.about__content}>
			<div className={style.about__content_text}>
				<h2 className={style.content_title}>About me</h2>
				<h4 className={style.content_text}>Front-end Developer
				based in Russia, Kazan 📍</h4>
				<h4 className={style.content_about}>Hi, my name is Rasim and I am a Frontend Developer. I love to create and develop clean UI/UX for my users.

Currently my main stack is React/Next.js combined with Tailwind CSS and TypeScript. 

				</h4>	
			</div>
			<img  className= {style.about__content_animation} src={animation} alt="animation-gif" />
			
		</div>
	</section>
}
export default About
