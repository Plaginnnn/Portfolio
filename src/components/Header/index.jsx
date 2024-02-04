import { useState } from 'react'
import style from './header.module.scss'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}
	const closeMenu = () => {
		setMenuOpen(false);
	};
	return (
		<header className={style.header}>
			<div>
				<a href='/' className=''>
					Plaginnnn.dev
				</a>
			</div>
			{!isMenuOpen && (
				<div className={style.header_elements}>
				<Link  to=''>Home</Link>
					<Link to='about'>About</Link>
					<a href='#'>Projects</a>
					<a href='#'>Contact</a>
				</div>
			)}
			{isMenuOpen && (
				<div className={style.mobile_menu}>
					{/*mobile menu items here */}
					<Link onClick={closeMenu} to=''>Home</Link>
				<Link onClick={closeMenu} to='about'>About</Link>
					<a href='#'>Projects</a>
					<a href='#'>Contact</a>
				</div>
			)}
			<div className={style.burger_menu} onClick={toggleMenu}>
				<Hamburger />
			</div>
		</header>
	)
}

export default Header
