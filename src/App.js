// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  const [musicList, setMusicList] = useState([]);
  const [trigger, setTrigger] = useState(true);

  const [musica, setMusica] = useState('');
  const [banda, setBanda] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');

  useEffect(() => {
    Axios.get(`http://localhost:5000/consulta-todos`)
        .then(response => {
          setMusicList(response.data.data);
        }).catch(error => {
          alert(error);
        });
  }, [trigger]);

  const removeValue = (musica, banda) => {
    const key = `${musica.replace(' ', '_')}_${banda.replace(' ', '_')}`;
    Axios.delete(`http://localhost:5000/remove/${key}`)
        .then(response => {
          setTrigger(!trigger);
        }).catch(error => {
          alert(error);
        });
  };

  const addValue = () => {
    const body = {
      "musica": musica,
      "banda": banda,
      "genero": genero,
      "ano": ano,
    };
    Axios.post(`http://localhost:5000/cadastra`, body)
        .then(response => {
          setTrigger(!trigger);
        }).catch(error => {
          alert(error);
        });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-list">
          {
            musicList.map(value => (<Box value={value} onClick={removeValue}/>))
          }
        </div>
        <div className="App-form">
          <label>
            Música:  
            <input 
              type="text"
              name='musica'
              style={{ marginLeft: 14, marginBottom: 15 }}
              value={musica}
              onChange={(event) => setMusica(event.target.value)}
            ></input>
          </label>
          <label>
            Banda:  
            <input 
              type="text"
              name='banda'
              style={{ marginLeft: 14, marginBottom: 15 }}
              value={banda}
              onChange={(event) => setBanda(event.target.value)}
            ></input>
          </label>
          <label>
            Ano:  
            <input 
              type="number"
              name='ano'
              style={{ marginLeft: 14, marginBottom: 15 }}
              value={ano}
              onChange={(event) => setAno(event.target.value)}
            ></input>
          </label>
          <label>
            Gênero:  
            <input 
              type="text"
              name="genero"
              style={{ marginLeft: 14, marginBottom: 15 }}
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            ></input>
          </label>
          <button
            name="adicionar"
            style={{padding: 10, backgroundColor: '#313131', color: 'white' }}
            onClick={addValue}
          >Adicionar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
