import React from 'react'
import { TwitchEmbed } from 'react-twitch-embed'

export default () =>
<section id="stream">
	<h1>Stream</h1>
	<div>
		<TwitchEmbed
			channel="l33tstudio"
			id="twitch-embed"
			theme="dark"
			withChat={false}
			autoplay={false}
			onVideoPause={() => console.log(':(')}
		/>
	</div>
</section>
