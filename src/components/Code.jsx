
import { useEffect, useRef, useState } from 'react';

function Code({ logo, heading, code, setCode }) {
    const [isLocked, setIsLocked] = useState(false);
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    const copyToClipboard = () => {
        inputRef.current.select();
        navigator.clipboard.writeText(code);
        setCopied(true);
    };

    const handleToggleLock = () => {
        setIsLocked(!isLocked);
    }
    return (
        <div className="copy-box">
            <div className='div'>
                <div>
                    <img src={logo} alt="" />
                    <h2 className="box-heading">{heading}</h2>
                </div>
                <button className="copy-button" onClick={handleToggleLock}>
                    <img src={isLocked ? 'lock.png' : 'unlocked.png'} alt="" />
                </button>
                <button
                    onClick={copyToClipboard}
                    className="copy-button">
                    {copied ? "Copied" : "Copy"}
                </button>

            </div>
            <textarea ref={inputRef} readOnly={isLocked} value={code} onChange={(e) => {
                setCopied(false)
                setCode(e.target.value)
            }} className="text-area"></textarea>
        </div>
    );
}

export default Code;