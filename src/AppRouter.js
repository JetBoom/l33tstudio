import { Routes, Route } from 'react-router-dom'
import Home from 'views/Home'
import CyberProHome from 'views/cyberpro/Home'

export default function AppRouter() {
	return <Routes>
		<Route path="/cyberpro">
			<Route index element={<CyberProHome />} />
		</Route>

		<Route path="*" element={<Home />} />
	</Routes>
}
