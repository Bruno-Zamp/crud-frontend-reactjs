function Box({ value }) { 
    const { musica, banda, genero, ano} = value;
    return (
        <div
            style={{backgroundColor: '#202020', width:'15em', height:'15em', borderRadius: 20, margin: 20, justifyContent: 'center', alignContent: 'space-around', padding: 15}}
        >
            <div>
                <p>Música: {musica}</p>
                <p>Banda: {banda}</p>
                <p>Ano: {ano}</p>
                <p>Gênero: {genero}</p>
            </div>
            <button style={{ marginTop: 20 }}>remover</button>
        </div>
    )
} 

export default Box;