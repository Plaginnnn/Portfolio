import React, { useState } from 'react'
import style from './header.module.scss'
import { Squash as Hamburger } from 'hamburger-react'

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}

	return (
		<header className={style.header}>
			<div>
				<a href='/' className=''>
					Plaginnnn.dev
				</a>
			</div>
			{!isMenuOpen && (
				<div className={style.header_elements}>
					<a href='#'>Home</a>
					<a href='#'>About</a>
					<a href='#'>Projects</a>
					<a href='#'>Contact</a>
				</div>
			)}
			{isMenuOpen && (
				<div className={style.mobile_menu}>
					{/*mobile menu items here */}
					<a href='#'>Home</a>
					<a href='#'>About</a>
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
