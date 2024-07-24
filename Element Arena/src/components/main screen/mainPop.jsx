import { useEffect } from 'react';
import './mainPop.css';

export default function MainPop() {
    useEffect(() => {
        showPopup();
    }, []);

    function showPopup() {
        const modal = document.getElementById('openModal-1');
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }

    function closePopup() {
        const modal = document.getElementById('openModal-1');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.visibility = 'hidden';
        }, 350);
    }

    return (
        <>
            <div id="openModal-1" className="modal-1">
                <div className="modal-dialog-1">
                    <div className='mainName'>Elemental Battle</div>
                    <div>
                        <button onClick={closePopup} className='wrapper'><span>Begin</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}
