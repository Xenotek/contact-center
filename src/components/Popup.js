import React from 'react';
import Button from '../components/Button';

const Popup = (props) => {
    return props.isOpen && (
        <div className='popup'>
            <div className='popup__inner'>
                <h1 className='popup__title'>{props.title}</h1>

                <div className="popup__close">
                    <Button onClick={props.closePopup} className="button-close">×</Button>
                </div>
                <div className="popup__body">
                {
                    props.children
                }
                </div>
            </div>
        </div>
    );
}

export default Popup