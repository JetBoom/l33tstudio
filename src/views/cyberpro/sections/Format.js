import handleViewport from 'react-in-viewport'

function Format({ enterCount, forwardedRef }) {
	return <section
		id="format"
		className={enterCount ? '' : 'notinview'}
		ref={forwardedRef}
	>
		<h1>Format</h1>
		<div>
			<div>
				<div>Closed Qualifiers</div>
				<div>
					<div>Oct. 11</div>
					<ul>
						<li>Single Elimination format
							<ul>
								<li>All matches are BO3</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div>Group Stage</div>
				<div>
					<div>Oct. 12 - Oct. 25</div>
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
					<div>Oct. 27 - Nov. 1</div>
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
}

export default handleViewport(Format)
