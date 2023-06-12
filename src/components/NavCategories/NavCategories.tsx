import NavCategory from "./NavCategory"
import "./navcategories.scss"
import { useDraggable } from "react-use-draggable-scroll"

import { useRef } from "react"

const NavCategories = () => {
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>

  const { events } = useDraggable(containerRef, {
    applyRubberBandEffect: true,
  })

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return
    containerRef.current.scroll({
      top: 0,
      left:
        direction === "left"
          ? containerRef.current.scrollLeft - 100
          : containerRef.current.scrollLeft + 100,
      behavior: "smooth",
    })
  }

  return (
    <div className="nav__categories">
      <button onClick={() => handleScroll("left")}>L</button>
      <div className="nav__buttons" {...events} ref={containerRef}>
        <NavCategory name="arts" />
        <NavCategory name="automobiles" />
        <NavCategory name="business" />
        <NavCategory name="food" />
        <NavCategory name="travel" />
        <NavCategory name="upshot" />
        <NavCategory name="us" />
        <NavCategory name="world" />
        <NavCategory name="arts" />
        <NavCategory name="automobiles" />
        <NavCategory name="business" />
        <NavCategory name="food" />
        <NavCategory name="travel" />
        <NavCategory name="upshot" />
        <NavCategory name="us" />
        <NavCategory name="world" />
        <NavCategory name="arts" />
        <NavCategory name="automobiles" />
        <NavCategory name="business" />
        <NavCategory name="food" />
        <NavCategory name="travel" />
        <NavCategory name="upshot" />
        <NavCategory name="us" />
        <NavCategory name="world" />
        <NavCategory name="arts" />
        <NavCategory name="automobiles" />
        <NavCategory name="business" />
        <NavCategory name="food" />
        <NavCategory name="travel" />
        <NavCategory name="upshot" />
        <NavCategory name="us" />
        <NavCategory name="world" />
      </div>
      <button onClick={() => handleScroll("right")}>R</button>
    </div>
  )
}

export default NavCategories
