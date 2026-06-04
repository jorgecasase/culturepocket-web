import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  )
}
