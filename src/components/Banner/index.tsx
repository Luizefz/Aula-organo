import React from 'react'
import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

function Banner({ enderecoImagem, textoAlternativo }: BannerProps) {
    return (
        <header className='banner'>
            {/* <img src='/images/banner.png' alt='Banner principal Organo' draggable='false' /> */}
            <img src={enderecoImagem} alt={textoAlternativo} draggable='false' />
        </header>

    )
}

export default Banner