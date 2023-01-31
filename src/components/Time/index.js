import React from 'react'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {



    return (
        (props.colaborador.length) ?
            <section className='time' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaborador.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo} />)}
                </div>
            </section>
            : ' '
    )
}

export default Time