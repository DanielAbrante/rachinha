import { Outlet } from "react-router"
import "./App.css"

export function AppLayout() {
  return (
    <div className="home">
      <main>
        <Outlet />
      </main>
      <nav>
        <ul>
          <li>Lista do Racha</li>
          <li>Temporizador</li>
        </ul>
      </nav>
    </div>
  )
}