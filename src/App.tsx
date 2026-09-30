import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { GameIntro, GamePlay } from './pages/GamePage'
import LegalPage from './pages/LegalPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jeux/:gameId" element={<GameIntro />} />
          <Route path="jeux/:gameId/jouer" element={<GamePlay />} />
          <Route path="mentions-legales" element={<LegalPage page="mentions" />} />
          <Route path="confidentialite" element={<LegalPage page="privacy" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
