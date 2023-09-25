import Logo from 'common/Logo'
import SocialStrip from 'common/SocialStrip'

export default function Header() {
	return <>
		<header>
			<nav>
				<a href="/#about">About Us</a>
				<a href="/#studio">Studio</a>
				<a href="/#overlay">Overlays</a>
				<a href="/#team">Team</a>
				<a href="/#contact">Contact</a>
				<a href="/#partners">Partners</a>
				<a href="/#events">Events</a>
				<a href="/cyberpro">cyberPRO</a>
			</nav>
		</header>
		<Logo />
		<SocialStrip />
	</>
}
