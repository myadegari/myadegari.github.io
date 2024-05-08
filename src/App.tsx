import { Link } from "react-router-dom"
import content from "./content/content"

function App() {

  return (
    <main className="bg-gray-800 h-svh w-svw grid place-items-center">
      <div className="bg-white p-4 rounded-xl text-gray-700 w-11/12 grid grid-cols-2 py-5 px-12 font-body">
        <nav className="flex gap-5">
          <Link to="/"
          className=""
          >{content.home}</Link>
          <Link to="/">{content.academicPortfolio}</Link>
          <Link to="/">{content.repositories}</Link>
        </nav>

      </div>
    </main>
  )
}

export default App
