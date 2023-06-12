import { Ttheme } from "../../types"
import NavCategories from "../NavCategories/NavCategories"
import NavCategory from "../NavCategories/NavCategory"
import "./navbar.scss"

const Navbar = ({
  theme,
  setTheme,
}: {
  theme: Ttheme
  setTheme: React.Dispatch<React.SetStateAction<Ttheme>>
}) => {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav__main">
        <div>Home</div>
        <input type="text" />
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          q
        </button>
      </div>
      <NavCategories />
    </nav>
  )
}

export default Navbar
