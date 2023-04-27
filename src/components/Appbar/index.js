import React from 'react';
import './index.css'

export default function Appbar(){
    return (
        <div className="appbar">
            <img src="/logo-getit.png" className="logo" alt="logo do post-it"/>
            <span className="subtitle">Como o Post-it, mas com outro verbo</span>
        </div>
    );
}