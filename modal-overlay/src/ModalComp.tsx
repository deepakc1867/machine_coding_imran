import React, { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from "react";
import ModalContent from './ModalContent';
import './ModalComp.css';


const ModalComp = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isOfferAccepted, setIsOfferAccepted] = useState(false);

    return (
        <>
            <div className='modal-overlay'>
                <h1>Hello There...</h1>
                <div className='modal-btn'>
                    {!open && !isOfferAccepted ?
                            <button className='open-btn' onClick={() => setOpen(!open)}>Show Offer`</button>
                        :
                    !open && isOfferAccepted &&
                            <p>Offer Accepted</p>
                    }
            
                    <ModalContent open={open} setOpen={setOpen} setIsOfferAccepted={setIsOfferAccepted} />
                </div>
            </div>
        </>
    )
}

export default ModalComp;