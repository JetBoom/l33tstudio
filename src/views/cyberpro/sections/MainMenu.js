import React from 'react'
import handleViewport from 'react-in-viewport'

const MainMenu = ({ enterCount, forwardedRef }) =>
<section
	id="csgo-menu"
	className={enterCount ? '' : 'notinview'}
	ref={forwardedRef}
>
	<div>
		<div>
			<MenuButton href="#about">About</MenuButton>
			<MenuButton href="#stream">Stream</MenuButton>
			<MenuButton href="#format">Format</MenuButton>
		</div>
		<div>
			<img src="/img/cyberpro_emblem.png" className="cyberpro-logo" alt="Event Logo" />
		</div>
		<div>
			<MenuButton href="#schedule">Schedule</MenuButton>
			<MenuButton href="#brackets">Brackets</MenuButton>
			<MenuButton href="#rules">Rules</MenuButton>
		</div>
	</div>
	<div>
		<div className="-title">cyberPRO</div>
		<div className="-series">Series 2</div>
		<div className="-tagline"></div>
	</div>
</section>

export default handleViewport(MainMenu)

const MenuButton = ({ children, href }) => <a className="csgo-button" href={href}>{children}</a>
