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
				<div>Sept 28 - Oct 07</div>
				<ul>
					<li>GSL format
						<ul>
							<li>All matches are BO1 excluding decider</li>
							<li>Decider match is BO3</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<div>Playoffs</div>
			<div>
				<div>Oct 08 - Oct 12</div>
				<ul>
					<li>Single Elimination format
						<ul>
							<li>All matches are BO3 including the Grand Final</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

export default handleViewport(Format)
