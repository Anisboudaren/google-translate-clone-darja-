import { useState, useEffect } from 'react';
import "./TransWindow.css";

export default function TransWindow() {
    const [textA, setTextA] = useState('');
    const [textB, setTextB] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(textA);
            if(textA == "وشراك") setTextB("كيف حالك");
            else setTextB(textA);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [textA]);

    const handleChangeA = (e) => {
        setTextA(e.target.value);
    };

    return (
        <div className="container">
            <div className="topSection">
                <div className="lang">🌐 input :  <span>Daridja</span></div>
                <button className="switch">reverse</button>
                <div className="lang">🌐 output : <span>Arabic</span></div>
            </div>
            <div className="botSection">
                <textarea 
                    name="langA" 
                    id="langA" 
                    cols="30" 
                    rows="10" 
                    value={textA} 
                    onChange={handleChangeA}
                ></textarea>
                <textarea 
                    name="langB" 
                    id="langB" 
                    cols="30" 
                    rows="10" 
                    value={textB} 
                    readOnly
                ></textarea>
            </div>
        </div>
    );
}
