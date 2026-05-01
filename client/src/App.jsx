import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BgCanvas from './components/BgCanvas'
import DustCanvas from './components/DustCanvas'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import DesignsPage from './pages/DesignsPage'
import ConceptualDesignPage from './pages/ConceptualDesignPage'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <Router>
      <Cursor />
      <BgCanvas />
      <DustCanvas />
      <Nav />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/portfolio" element={<ConceptualDesignPage />} />
      </Routes>
    </Router>
  )
}
