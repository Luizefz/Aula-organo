import React from 'react'
import './Cabecalho.css'

export const Cabecalho = () => {
    return (
        <header>
            <div className='header'>
                <a href='/' id='logo-link'>
                    <img id='logo' alt='Logo - Patinha de cachorro' src='/images/logo.png' />
                    <span>Pets breeds</span>
                </a>

                <nav>
                    <ul>
                        <li><a href='/' title='Navigate to home'>Home</a></li>
                        <li><a href='/'>Dogs</a></li>
                        <li><a href='/'> Cats</a></li>
                    </ul>
                    <button id='search' title='Open search field'></button>
                </nav>
            </div>
        </header>
    )
}
