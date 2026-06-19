import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Support from './pages/Support.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </HashRouter>
  )
}
