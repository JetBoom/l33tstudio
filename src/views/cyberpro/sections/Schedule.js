/*import { useState, useEffect } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const API_KEY = 'AIzaSyBtfuI3P5pz0oLrrPU80nLcx-VILq2zxpQ'
const SHEET_ID = '173dYVjjIpCNphiC2tCL_p0ykk4Pd89UtJxsB6O8R7fs'
const UPDATE_INTERVAL = 30000
const TEAM_LOGO_BASE = 'https://gamestate.overman.dev/static/img/teams/'

function getTeamIcon(teamname) {
	teamname = teamname ?? ''
	teamname = teamname.replace(/[`\s-]/g, '_')
	teamname = teamname.toLowerCase()
	return teamname + '.png'
}*/

function clamp(val, min, max) {
	if (val < min) val = min
	if (val > max) val = max
	return val
}

export default function Schedule() {
	const schedule = [] //const [schedule, setSchedule] = useState([])

	/*useEffect(() => {
		async function fetchData() {
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
				for (let c = 6; c < 20; ++c) {
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
					stage: schedSheet.getCell(row, 5).value,
					maps,
				}

				schedItem.teamLogo1 = TEAM_LOGO_BASE + getTeamIcon(schedItem.teamName1)
				schedItem.teamLogo2 = TEAM_LOGO_BASE + getTeamIcon(schedItem.teamName2)

				sched.push(schedItem)
			}
			sched.reverse()
			setSchedule(sched)
		}

		fetchData()
		const interval = setInterval(fetchData, UPDATE_INTERVAL)
		return () => void clearInterval(interval)
	}, [])*/

	return <section id="schedule">
		<h1>Schedule</h1>
		<div className="-matches">
			{schedule.map((match, i) => {
				const pending = match.teamScore1 === 0 && match.teamScore2 === 0
				const colored = match.maps.length <= 1
					|| (match.teamScore1 + match.teamScore2) >= Math.floor(2 / 3 * match.maps.length)

				return <div key={i}>
					<div className="-time">{match.startTime}</div>
					<div className="-info">
						<div className="-team">
							<div>
								<div>{match.teamName1}</div>
								<div style={{backgroundImage: 'url("' + match.teamLogo1 + '")'}} />
							</div>
							{!pending && <div className={colored ? 'colored' : ''} data-diff={clamp(match.teamScore1 - match.teamScore2, -1, 1)}>{match.teamScore1}</div>}
						</div>
						<div className="-vs">{pending ? 'vs' : ':'}</div>
						<div className="-team">
							<div>
								<div>{match.teamName2}</div>
								<div style={{backgroundImage: 'url("' + match.teamLogo2 + '")'}} />
							</div>
							{!pending && <div className={colored ? 'colored' : ''} data-diff={clamp(match.teamScore2 - match.teamScore1, -1, 1)}>{match.teamScore2}</div>}
						</div>
					</div>
					<div className="-stage">{match.stage} BO{match.maps.length}</div>
					<div className="-maps">
						{match.maps.map((map, j) =>
							<div key={j}>{map}</div>
						)}
					</div>
				</div>
			})}
		</div>
	</section>
}
