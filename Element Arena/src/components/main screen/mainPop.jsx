import { useEffect } from 'react';
import './mainPop.css'

export default function MainPop() {
    useEffect(() => {
        showPopup();
    }, []);

    function showPopup() {
        document.getElementById('openModal-1').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('openModal-1').style.display = 'none';
    }
    return (
        <>
            <div id="openModal-1" className="modal-1">
                <div className="modal-dialog-1">
                    <div>Elemental Battle</div>
                    <div>
                        <button onClick={closePopup} className='wrapper'><span>Begin</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}