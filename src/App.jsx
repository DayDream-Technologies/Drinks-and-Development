import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PastEventsPage } from './pages/PastEventsPage'
import { ParticipantsPage } from './pages/ParticipantsPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/past-events" element={<PastEventsPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
