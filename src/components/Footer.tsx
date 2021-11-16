import React from 'react';
import './Footer.css';
import ambevtechlogo from '../assets/ambevtechlogo.png';

export default function Footer() {
    return(
        <footer className="footer">
           powered by&nbsp;<img src={ambevtechlogo} />
        </footer>
    )
}