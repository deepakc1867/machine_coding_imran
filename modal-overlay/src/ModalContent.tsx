import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import './ModalContent.css';

interface Olli {
    open: boolean;
    setOpen:  Dispatch<SetStateAction<boolean>>;
    setIsOfferAccepted: Dispatch<SetStateAction<boolean>>;
}

const ModalContent = ({ open, setOpen, setIsOfferAccepted }: Olli) => {
    return (
        <>
            {open && 
                <div className="modal-container">
                    <div className="modal-wrap">
                       <button className="close-btn" onClick={() => setOpen(false)}>
                            &times; 
                        </button>
                        <p>Click the button below to accept the amazing offer...</p>
                        <button className='accept-btn' onClick={() => {
                            setOpen(false)
                            setIsOfferAccepted(true)
                            }}>
                        Accept Offer</button>
                    </div>
                </div>

            }
        </>
    )
}

export default ModalContent;