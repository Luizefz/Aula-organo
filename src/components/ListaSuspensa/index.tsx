import React from 'react'
import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterar: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}
            </label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor}>
                <option value="">- Selecione um time -</option>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa