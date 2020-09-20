import React from 'react'
import MainMenu from './sections/MainMenu'
import About from './sections/About'
import Stream from './sections/Stream'
import Format from './sections/Format'
import Schedule from './sections/Schedule'
import Brackets from './sections/Brackets'
import Rules from './sections/Rules'
import 'styles/csgo.scss'

export default () => {
	document.getElementById('top').className = document.body.className = 'csgo'
	document.getElementById('theme-color').content = '#111'
	document.title = 'cyberPRO Series 2 | L33T.studio'

	return <>
		<MainMenu />
		<About />
		<Stream />
		<Format />
		<Schedule />
		<Brackets />
		<Rules />
	</>
}
