import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PastEventsPage } from './pages/PastEventsPage'
import { ParticipantsPage } from './pages/ParticipantsPage'
import { SponsorsPage } from './pages/SponsorsPage'
import { TeamPage } from './pages/TeamPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/past-events" element={<PastEventsPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
