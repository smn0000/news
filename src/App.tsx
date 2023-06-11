import "./sass/global.scss"
import Navbar from "./components/Navbar/Navbar"
import { useState, useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"
import { Ttheme } from "./types.ts"

function App() {
  const [theme, setTheme] = useState<Ttheme>(
    useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
  )

  useEffect(() => {
    let root = document.querySelector("#root")
    root?.classList.remove("light", "dark")
    root?.classList.add(theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
