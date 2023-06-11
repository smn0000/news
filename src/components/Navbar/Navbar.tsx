import { Ttheme } from "../../types"
import NavCategory from "../NavCategory/NavCategory"
import "./navbar.scss"

const Navbar = ({
  theme,
  setTheme,
}: {
  theme: Ttheme
  setTheme: React.Dispatch<React.SetStateAction<Ttheme>>
}) => {
  return (
    <nav
      className={` ${theme}`}
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
      <NavCategory name="lorem" />
    </nav>
  )
}

export default Navbar
