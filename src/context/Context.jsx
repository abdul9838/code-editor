import { createContext, useState, useEffect } from "react";

export const codeContext = createContext();

export const CodeProvider = ({ children }) => {
    const [html, setHtml] = useState(localStorage.getItem("html") || "");
    const [css, setCss] = useState(localStorage.getItem("css") || "");
    const [js, setJs] = useState(localStorage.getItem("js") || "");
    const [output, setOutput] = useState("");

    const generateContent = () => {
        return `<html>
         <head>   
         </head>
         <style>
             ${css}
         </style>
         <body>
             ${html}
             <script>
                 ${js}  
             </script>
         </body>
     </html>`;
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const content = generateContent();
            setOutput(content);
        }, 400);
        return () => clearTimeout(timeoutId);
    }, [html, css, js]);

    // Update local storage whenever HTML, CSS, or JS changes
    const handleSaveToLocalStorage = () => {
        localStorage.setItem("html", html);
        localStorage.setItem("css", css);
        localStorage.setItem("js", js);
    };

    return (
        <codeContext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs,
                output,
                handleSaveToLocalStorage
            }}
        >
            {children}
        </codeContext.Provider>
    );
};

export default CodeProvider;
