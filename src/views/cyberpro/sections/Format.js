import React from 'react'
import handleViewport from 'react-in-viewport'

const Format = ({ enterCount, forwardedRef }) =>
<section
	id="format"
	className={enterCount ? '' : 'notinview'}
	ref={forwardedRef}
>
	<h1>Format</h1>
	<div>
		<div>
			<div>Group Stage</div>
			<div>
				<div>September 4th - 6th</div>
				<ul>
					<li>GSL format</li>
				</ul>
			</div>
		</div>
		<div>
			<div>Playoffs</div>
			<div>
				<div>September 8th - 10th</div>
				<ul>
					<li>Single Elimination format</li>
				</ul>
			</div>
		</div>
	</div>
</section>

export default handleViewport(Format)
