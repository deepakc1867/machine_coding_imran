import React, { useEffect, useState } from 'react';

interface Olli {
    handleClose: () => void;
    handleOfferAccept: () => void;
}

const Modal = ({ handleClose, handleOfferAccept }: Olli) => {
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if(target.className == 'modal'){
            handleClose();
        }
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if(e.key === 'Escape') handleClose();
        }

        document.addEventListener('keydown', handleEsc)

        return () => document.removeEventListener('keydown', handleEsc);
    }, [])  
    return (
        // <div className='modal' onClick={handleOutsideClick}>
        <div className='modal' onClick={handleClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {/* humne div -> 'modal' pr handleClose laga diya
                    and 'modal-content' pr e.stopPropagation()
                    laga diya taaki jo click event hai wo upar tak
                    jaaye hi na kyuki jese hi hum modal
                    ke andar click krege event stop ho jaega modal
                    ka onClick chlega hi nh but modal-content ke bahar click krege
                    to band ho jaega because 'handleClose' modal pr hi laga 
                    diya hai
                */}
                <button className='close-btn' onClick={handleClose}>X</button>

                <div className='content'>
                    Click the button below to
                    accept our amazing offer!
                </div>
                <button 
                    className='accept-btn'
                    onClick={handleOfferAccept}
                >
                    Accept Offer
                </button>
            </div>
        </div>
    )
}

export default Modal;