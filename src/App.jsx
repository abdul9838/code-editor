import Header from "./components/Header"
import AllCode from "./components/AllCode"
import "./App.css"
import Output from "./components/Output"
import { useContext } from "react"
import { codeContext } from "./context/Context"
function App() {
  const { handleSaveToLocalStorage } = useContext(codeContext)
  return (
    <>
      <Header />
      <button className="copy-button" onClick={handleSaveToLocalStorage}><img src="save.png" alt="" />Save</button>
      <AllCode />
      <h3>Preview</h3>
      <Output />
    </>
  )
}

export default App


