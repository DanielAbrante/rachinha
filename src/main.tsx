import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppLayout } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Timer } from './Timer.tsx'
import { RachaList } from './modules/RachaList/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<RachaList />} />
          <Route path='/timer' element={<Timer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
