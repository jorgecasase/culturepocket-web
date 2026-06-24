import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Support from './pages/Support.jsx'
import TermsOfUse from './pages/TermsOfUse.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </HashRouter>
  )
}
