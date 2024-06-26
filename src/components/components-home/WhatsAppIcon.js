import React from 'react';
import './WhatsAppIcon.css'; // Import WhatsAppIcon CSS file
import icon from './whatsapp.png'

const WhatsAppIcon = () => {
    return (
        <a href="https://wa.me/+923129435942" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="WhatsApp" />
        </a>
    );
}

export default WhatsAppIcon;
