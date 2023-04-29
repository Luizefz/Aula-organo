import './Time.css'
import { IColaborador } from '../../shared/interfaces/IColaborador'
import Colaborador from '../Colaborador'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    return (
        (props.colaboradores.length > 0) ?
            <section className='time' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador =>
                        <Colaborador
                            key={colaborador.nome}
                            corDeFundo={props.corPrimaria}
                            nome={colaborador.nome}
                            imagem={colaborador.imagem}
                            cargo={colaborador.cargo}
                        />
                    )}
                </div>
            </section>
            : <></>
    )
}

export default Time