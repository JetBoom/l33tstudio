/*import { useState, useEffect } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const API_KEY = 'AIzaSyBtfuI3P5pz0oLrrPU80nLcx-VILq2zxpQ'
const SHEET_ID = '173dYVjjIpCNphiC2tCL_p0ykk4Pd89UtJxsB6O8R7fs'

const TEAM_LOGO_BASE = 'https://gamestate.overman.dev/static/img/teams/'

function getTeamIcon(teamname) {
	teamname = teamname ?? ''
	teamname = teamname.replace(/[`\s-]/g, '_')
	teamname = teamname.toLowerCase()
	return teamname + '.png'
}*/

export default function About() {
	const teams = [] //const [teams, setTeams] = useState([])

	/*useEffect(() => {
		async function fetchData() {
			const doc = new GoogleSpreadsheet(SHEET_ID, API_KEY)

			await doc.loadInfo()
			const teamsSheet = doc.sheetsByTitle['Teams']
			await teamsSheet.loadCells()

			const newTeams = []
			for (let row = 0; row < teamsSheet.rowCount; ++row) {
				const teamName = teamsSheet.getCell(row, 0).value
				if (!teamName)
					break

				newTeams.push({teamName, logo: TEAM_LOGO_BASE + getTeamIcon(teamName)})
			}
			setTeams(newTeams)
		}

		fetchData()
	}, [])*/

	return <section id="about">
		<h1>About</h1>

		<div>
			<div>
				<div>When</div>
				<p>October 11 - November 1</p>
			</div>

			<div>
				<div>Prize Pool</div>
				<p>$10,000</p>
				<p style={{fontSize: '80%'}}>{`1st place: $7,000
				2nd place: $3,000`}</p>
			</div>

			<div>
				<div>Participants</div>
				<div className="-teamList">
					{teams.map((team, i) => (<div key={i} style={{backgroundImage: 'url("' + team.logo + '")'}} />))}
				</div>
			</div>
		</div>
	</section>
}
