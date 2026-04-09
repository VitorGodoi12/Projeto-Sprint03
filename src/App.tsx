import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ScrollToTop }   from './components/ScrollToTop'
import { HomePage }      from './pages/HomePage'
import { QuemSomosPage } from './pages/QuemSomosPage'
import { SobrePage }     from './pages/SobrePage'
import { ProgramasPage } from './pages/ProgramasPage'
import { FAQPageRoute }  from './pages/FAQPageRoute'
import { ContatoPage }   from './pages/ContatoPage'
import { SolucaoPage }   from './pages/SolucaoPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/sobre"      element={<SobrePage />} />
        <Route path="/programas"  element={<ProgramasPage />} />
        <Route path="/faq"        element={<FAQPageRoute />} />
        <Route path="/contato"    element={<ContatoPage />} />
        <Route path="/solucao"    element={<SolucaoPage />} />
        <Route path="*"           element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
 
