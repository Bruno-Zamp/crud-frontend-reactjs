function Box({ value, onClick }) { 
    const { musica, banda, genero, ano} = value;
    return (
        <div
            className="App-item"
            style={{backgroundColor: '#202020', width:'15em', height:'15em', borderRadius: 20, margin: 20, justifyContent: 'center', alignContent: 'space-around', padding: 15}}
        >
            <div>
                <p>Música: {musica}</p>
                <p>Banda: {banda}</p>
                <p>Ano: {ano}</p>
                <p>Gênero: {genero}</p>
            </div>
            <button
                name="remove_button"
                style={{ marginTop: 20 }}
                onClick={() => onClick(musica, banda)}
            >remover</button>
        </div>
    )
} 

export default Box;