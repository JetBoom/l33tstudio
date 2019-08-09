var teams = [
	{
		name: 'Windigo',
		logo: 'windigo.png',
		flag: 'bulgaria',
		win: 1,
		lose: 1,
		rd: 7,
		points: 3,
		coach: 'ToH1o',
		members: [
			'bubble',
			'poizon',
			'shipz',
			'viktor',
			'blocker'
		]
	},
	{
		name: 'AVANGAR',
		logo: 'avangar.png',
		flag: 'kazakhstan',
		win: 1,
		lose: 0,
		rd: 15,
		points: 3,
		coach: 'dastan',
		members: [
			'fitch',
			'buster',
			'KrizzeN',
			'qikert',
			'Jame'
		]
	},
	{
		name: 'Nexus',
		logo: 'nexus.png',
		flag: 'romania',
		win: 1,
		lose: 1,
		rd: -2,
		points: 3,
		coach: '-',
		members: [
			'btn',
			'xellow',
			'seminte',
			'igm',
			'im'
		]
	},
	{
		name: 'BPro',
		logo: 'bpro.png',
		flag: 'bulgaria',
		win: 3,
		lose: 0,
		rd: 28,
		points: 9,
		coach: 'JoSeKi',
		members: [
			'Zix',
			'Rock1nG',
			'niki1',
			'NK4Y',
			'dennyslaw'
		]
	},
	{
		name: '3DMAX',
		logo: '3dmax.svg',
		flag: 'france',
		win: 1,
		lose: 2,
		rd: -4,
		points: 3,
		coach: 'GoY',
		members: [
			'Davidp',
			'Maka',
			'JiNKZ',
			'HaDJI',
			'DEVIL'
		]
	},
	{
		name: 'GamePub',
		logo: 'gamepub.png',
		flag: 'serbia',
		win: 0,
		lose: 6,
		rd: -40,
		points: 0,
		coach: '-',
		members: [
			'juricM',
			'SHEV',
			'WYRR',
			'Skipper',
			'Katalic'
		]
	},
	{
		name: 'Volgare',
		logo: 'volgare.png',
		flag: 'hungary',
		win: 1,
		lose: 5,
		rd: -36,
		points: 3,
		coach: '-',
		members: [
			'boco',
			'rmL',
			'barcode',
			'gevve',
			'fleav'
		]
	},
	{
		name: 'Bojestvata',
		logo: 'bojestvata.png',
		flag: 'bulgaria',
		win: 0,
		lose: 2,
		rd: -7,
		points: 0,
		coach: '-',
		members: [
			'dream3r',
			'Shooter',
			'Partodis',
			'xek',
			'Foreign'
		]
	},
	{
		name: 'SJ',
		logo: 'sj.svg',
		flag: 'finland',
		win: 4,
		lose: 0,
		rd: 15,
		points: 12,
		coach: 'toNppa',
		members: [
			'xartE',
			'KHRN',
			'arvid',
			'Jamppi',
			'SADDYX'
		]
	},
	{
		name: 'pro100',
		logo: 'pro100.svg',
		flag: 'ukraine',
		win: 4,
		lose: 4,
		rd: 15,
		points: 12,
		coach: 'ceh9',
		members: [
			'def',
			'AiyvaN',
			'kenzor',
			'Flarich',
			'YEKINDAR'
		]
	},
	{
		name: 'Unicorns of Love',
		logo: 'uol.png',
		flag: 'germany',
		win: 4,
		lose: 1,
		rd: 22,
		points: 12,
		coach: '-',
		members: [
			'crisby',
			'DeniMM',
			'Kirby',
			'maRky',
			'kZy'
		]
	},
	{
		name: 'AKOPALIPSA',
		logo: 'akopalipsa.png',
		flag: 'serbia',
		win: 0,
		lose: 3,
		rd: -13,
		points: 0,
		coach: '-',
		members: [
			'HOLMES',
			'DiMKE',
			'maden',
			'dEE',
			'sarenii'
		]
	},
	{
		name: 'Devils.one',
		logo: 'devilsone.png',
		flag: 'poland',
		win: 4,
		lose: 2,
		rd: 14,
		points: 12,
		coach: 'Loord',
		members: [
			'TaZ',
			'minise',
			'Rallen',
			'mouz',
			'dycha'
		]
	},
	{
		name: 'forZe',
		logo: 'forze.svg',
		flag: 'russia',
		win: 2,
		lose: 0,
		rd: 6,
		points: 6,
		coach: 'STRYK#R',
		members: [
			'facecrack',
			'almazer',
			'FL1T',
			'xsepower',
			'Jerry'
		]
	},
	{
		name: 'Heavy Knockouts',
		logo: 'heavyknockouts.png',
		flag: 'bulgaria',
		win: 2,
		lose: 2,
		rd: -21,
		points: 6,
		coach: '-',
		members: [
			'inertt',
			'nsd',
			'blink',
			'revenant',
			'matrexa'
		]
	},
	{
		name: 'HoP',
		logo: 'hop.png',
		flag: 'hungary',
		win: 2,
		lose: 2,
		rd: -11,
		points: 6,
		coach: '-',
		members: [
			'hussaR',
			'er9k',
			'SzarvasMarha',
			'kory',
			'torzsi'
		]
	}
]

function sortTeams() {
	teams.sort(function (a, b) {
	if (a.win === b.win)
		return b.rd - a.rd

	return b.win - a.win
	})
}

function findTeamID(name) {
	name = name.toLowerCase()

	for (var i=0; i < teams.length; i++) {
		if (teams[i].name.toLowerCase() === name)
			return i
	}

	return -1
}

function findTeamData(name) {
	name = name.toLowerCase()

	for (var i=0; i < teams.length; i++) {
		if (teams[i].name.toLowerCase() === name)
			return teams[i]
	}

	return null
}
