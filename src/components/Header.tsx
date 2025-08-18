import React from 'react';
import logo from '../assets/one-piece-logo.webp';

const Header = () => {
    return (
    <header className="bg-yellow-400 flex justify-center shadow-2xl hover:shadow-yellow-600">
        <nav>
        <ul className="flex">
            <li>
                <a href="/">
                    <img src={logo} alt="Logo de One Piece" className="w-32" />
                </a>
            </li>
        </ul>
        </nav>
    </header>
    );
};

export default Header;