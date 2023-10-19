import Code from './Code';
import { codeContext } from '../context/Context'; // Import the CodeProvider and useCode
import { useContext } from 'react';

const AllCode = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(codeContext)
    return (

        <div className="code-container">
            <Code heading="HTML" code={html} setCode={setHtml} logo="html-5.png" />
            <Code heading="CSS" code={css} setCode={setCss} logo="css-3.png" />
            <Code heading="JAVASCRIPT" code={js} setCode={setJs} logo="js.png" />
        </div>
    );
};

export default AllCode;