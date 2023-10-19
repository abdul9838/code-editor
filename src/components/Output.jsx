import { useContext } from "react"
import { codeContext } from "../context/Context"

const Output = () => {
    const { output } = useContext(codeContext);
    return (
        <>
            <iframe srcDoc={output}>
                <p>Browser does not support iframes.</p>
            </iframe>
        </>
    )
}

export default Output