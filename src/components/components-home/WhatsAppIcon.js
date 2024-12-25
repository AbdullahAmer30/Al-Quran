import React, { useState } from 'react';
import './WhatsAppIcon.css'; // Import WhatsAppIcon CSS file
import icon from './whatsapp.png';

const WhatsAppIcon = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
        setTimeout(() => setShowModal(true), 10); // Add a slight delay to trigger the transition
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setModalVisible(false), 300); // Delay to allow the transition to complete
    };

    const handleNumberClick = (number) => {
        window.open(`https://wa.me/${number}`, '_blank');
        closeModal();
    };

    return (
        <div>
            <a href="#!" className="whatsapp-icon" onClick={openModal}>
                <img src={icon} alt="WhatsApp" />
            </a>

            {modalVisible && (
                <div className={`modal ${showModal ? 'modal-show' : 'modal-hide'}`}>
                    <div className="modal-content">
                        <h3>Choose a WhatsApp Number</h3>
                        <button onClick={() => handleNumberClick('+923495888510')}>Pakistan Number</button>
                        <button onClick={() => handleNumberClick('+447928998608')}>UK Number</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppIcon;
