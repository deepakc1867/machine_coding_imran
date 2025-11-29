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
        <div className='modal' onClick={handleOutsideClick}>
            <div className='modal-content'>
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