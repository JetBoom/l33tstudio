import React, { useState, useEffect } from 'react'
const { GoogleSpreadsheet } = require('google-spreadsheet')

const API_KEY = 'AIzaSyBtfuI3P5pz0oLrrPU80nLcx-VILq2zxpQ'
const SHEET_ID = '173dYVjjIpCNphiC2tCL_p0ykk4Pd89UtJxsB6O8R7fs'
const UPDATE_INTERVAL = 30000
const TEAM_LOGO_BASE = 'https://gamestate.overman.dev/static/img/teams/'

function getTeamIcon(teamname) {
	teamname = teamname ?? ''
	teamname = teamname.replace(/[`\s-]/g, '_')
	teamname = teamname.toLowerCase()
	return teamname + '.png?1'
}

export default () => {
	const [schedule, setSchedule] = useState([])

	useEffect(() => {
		async function fetchData() {
			console.log('Fetching data')
			// spreadsheet key is the long id in the sheets URL
			const doc = new GoogleSpreadsheet(SHEET_ID)
			doc.useApiKey(API_KEY)

			await doc.loadInfo()
			const schedSheet = doc.sheetsByTitle['Schedule']
			await schedSheet.loadCells()

			const sched = []
			for (let row = 1; row < schedSheet.rowCount; ++row) {
				const startTime = schedSheet.getCell(row, 0).value
				if (!startTime)
					break

				const maps = []
				for (let c = 5; c < 20; ++c) {
					const map = schedSheet.getCell(row, c).value
					if (map)
						maps.push(map)
					else
						break
				}

				const schedItem = {
					startTime,
					teamName1: schedSheet.getCell(row, 1).value,
					teamName2: schedSheet.getCell(row, 2).value,
					teamScore1: schedSheet.getCell(row, 3).value,
					teamScore2: schedSheet.getCell(row, 4).value,
					maps,
				}

				schedItem.teamLogo1 = TEAM_LOGO_BASE + getTeamIcon(schedItem.teamName1)
				schedItem.teamLogo2 = TEAM_LOGO_BASE + getTeamIcon(schedItem.teamName2)

				sched.push(schedItem)
			}
			setSchedule(sched)
		}

		fetchData()
		const interval = setInterval(fetchData, UPDATE_INTERVAL)
		return () => void clearInterval(interval)
	}, [])

	return <section id="schedule">
		<h1>Schedule</h1>
		{schedule.map((match, i) =>
			<div key={i}>
				<div className="-time">{match.startTime}</div>
				<div className="-info">
					<div className="-team">
						<div>{match.teamName1}</div>
						<img src={match.teamLogo1} alt="Logo 1" />
						<div>{match.teamScore1}</div>
					</div>
					<div className="-team">
						<div>{match.teamName2}</div>
						<img src={match.teamLogo2} alt="Logo 2" />
						<div>{match.teamScore2}</div>
					</div>
				</div>
				<div>
					{match.maps.map((map, j) =>
						<div key={j}>{map}</div>
					)}
				</div>
			</div>
		)}
	</section>
}
