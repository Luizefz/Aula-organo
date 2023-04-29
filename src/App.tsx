import { useState } from 'react';
import Banner from './components/Banner';
import { Formulario } from './components/Formulario';
import Time from './components/Time';
import { Cabecalho } from './components/Cabecalho';
import Rodape from './components/Rodape';
import { IColaborador } from './shared/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColoaboradores] = useState<IColaborador[]>([])
  const addNovoColaborador = (colaborador: IColaborador) => {
    setColoaboradores([...colaboradores, colaborador]) //Pega a lista de todos os Colab, adiciona o novo e devolve um novo array
  }

  return (
    <div className="App">
      <Cabecalho />
      <Banner enderecoImagem='/images/banner.png' />
      <Formulario
        aoColaboradorCadastrado={colaborador => addNovoColaborador(colaborador)} //Recebe os dados de "dentro da tag" e joga para consumo da função
        times={times.map(time => time.nome)}
      />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}

      <Rodape />
    </div>
  );
}

export default App;
