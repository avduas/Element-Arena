import React, { useState } from 'react';
import ElementDetails from './elementDetails';
import './chooseElem.css';
import { useNavigate } from 'react-router-dom';

export default function ChooseElement() {
    const [selectedElement, setSelectedElement] = useState(null);
    const navigate = useNavigate();

    function ChosenElement(element) {
        setSelectedElement(element);
    }

    function handleReset() {
        setSelectedElement(null);
    }

    function StartGame() {
        navigate('/game', {state: {element: selectedElement}})
    }

    return (
        <div className="container">
            {!selectedElement && (
                <div className="upperBlock">
                    <div className="element" data-name="Fire" onClick={() => ChosenElement('Fire')}>
                        <img src="../../Fire.jpg" alt="Fire" />
                    </div>
                    <div className="element" data-name="Water" onClick={() => ChosenElement('Water')}>
                        <img src="../../Water.jpg" alt="Water" />
                    </div>
                    <div className="element" data-name="Wind" onClick={() => ChosenElement('Wind')}>
                        <img src="../../Wind.jpg" alt="Wind" />
                    </div>
                    <div className="element" data-name="Earth" onClick={() => ChosenElement('Earth')}>
                        <img src="../../Earth.jpg" alt="Earth" />
                    </div>
                    <div className="element" data-name="Ice" onClick={() => ChosenElement('Ice')}>
                        <img src="../../Ice.jpg" alt="Ice" />
                    </div>
                    <div className="element" data-name="Lightning" onClick={() => ChosenElement('Lightning')}>
                        <img src="../../Lightning.jpg" alt="Lightning" />
                    </div>
                </div>
            )}
            {selectedElement && (
                <div className='mainSelect'>
                    <div className="selectedElement">
                        <div className='picture'>
                            <img src={`../../${selectedElement}.jpg`} alt={selectedElement} />
                        </div>
                        <ElementDetails element={selectedElement} />
                    </div>
                    <div className='buttonBox'>
                    <button className="resetButton" onClick={handleReset}>Back</button>
                    <button className='playButton' onClick={StartGame}>Play</button>
                    </div>
                </div>
            )}
        </div>
    );
}
