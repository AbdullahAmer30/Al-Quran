// LazyPaymentIcon.js
import React from 'react';

const LazyPaymentIcon = ({ iconPath, name }) => {
  return <img src={iconPath} alt={name} className="payment-icon" loading="lazy" />;
};

export default LazyPaymentIcon;
