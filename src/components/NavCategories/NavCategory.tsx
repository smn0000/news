import { TSection } from "../../types"
import "./navcategory.scss"

const NavCategory = ({ name }: { name: TSection }) => {
  return <button className="nav__category">{name}</button>
}

export default NavCategory
