import Reacket from 'reacket'

let numTeams = 0
let numMatches = 0
const numInRound = {}
const teams = {}
//const matches = []

function addTeam(teamName) {
	const seed = ++numTeams

	teams[teamName] = {
		id: seed,
		name: teamName,
		seed,
	}
}

function addMatch(team1, team2, round, score) {
	if (!teams[team1]) addTeam(team1)
	if (!teams[team2]) addTeam(team2)

	numInRound[round] = (numInRound[round] || 0) + 1

	return {
		id: ++numMatches,
		round,
		match: numInRound[round],
		players: [
			teams[team1],
			teams[team2],
		],
		score,
	}
}

const closedQualifiers = [
	addMatch('Golden Knights', '9INE', 1, [2, 0]),
	addMatch('TheDice', 'Unique', 1, [0, 2]),
	addMatch('Offset', 'Quantum Belletor Fire', 1, [0, 2]),
	addMatch('LowLandLions', 'VP Prodigy', 1, [1, 2]),

	addMatch('Golden Knights', 'Unique', 2, [2, 0]),
	addMatch('VP Prodigy', 'Quantum Belletor Fire', 2, [0, 2]),
]

/*const groupStage = [
]*/

export default function Brackets() {
	return <section id="brackets">
		<h1>Brackets</h1>

		<div className="-section">Group Stage</div>
		<div style={{marginBottom: '3rem'}}>TBD</div>
		<div className="-section">Closed Qualifiers</div>
		<Reacket matches={closedQualifiers} />
	</section>
}
