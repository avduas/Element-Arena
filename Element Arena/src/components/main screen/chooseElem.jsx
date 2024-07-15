import React, { useState } from 'react';
import './chooseElem.css';

export default function ChooseElement() {
    const [selectedElement, setSelectedElement] = useState(null);

    function ChosenElement(element) {
        setSelectedElement(element);
    }

    function handleReset() {
        setSelectedElement(null);
    }

    return (
        <div>
            <div className={`upperBlock ${selectedElement ? 'selected' : ''}`}>
                {['Fire', 'Water', 'Wind', 'Earth', 'Ice', 'Lightning'].map(element => (
                    <div
                        key={element}
                        className={`element ${selectedElement === element ? 'center' : ''}`}
                        onClick={() => !selectedElement && ChosenElement(element)}
                    >
                        <img src={`../../${element}.jpg`} alt={element} />
                    </div>
                ))}
                {selectedElement && (
                    <button className="resetButton" onClick={handleReset}>Back</button>
                )}
            </div>
        </div>
    );
}
