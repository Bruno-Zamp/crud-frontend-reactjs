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
import './App.css';
import Box from './components/Box';

function App() {
  const mock = [
    {
        musica: "Breathe", 
        banda: "Pink Floyd",
        genero: "Rock",
        ano: 1973
    },
    {
        musica: "Mother", 
        banda: "Pink Floyd",
        genero: "Rock",
        ano: 1979
    },
    {
        musica: "Whole Lotta Love", 
        banda: "Led Zeppelin",
        genero: "Rock",
        ano: 1969
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-list">
          {
            mock.map(value => (<Box value={value} />))
          }
        </div>
        <div className="App-form">
          <label>
            Música:  
            <input type="text" style={{ marginLeft: 14, marginBottom: 15 }}></input>
          </label>
          <label>
            Banda:  
            <input type="text" style={{ marginLeft: 14, marginBottom: 15 }}></input>
          </label>
          <label>
            Ano:  
            <input type="number" style={{ marginLeft: 14, marginBottom: 15 }}></input>
          </label>
          <label>
            Gênero:  
            <input type="text" style={{ marginLeft: 14, marginBottom: 15 }}></input>
          </label>
          <button style={{padding: 10, backgroundColor: '#313131', color: 'white' }}>Adicionar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
