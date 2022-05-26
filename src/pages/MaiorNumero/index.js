import { useState } from "react"
import axios from "axios";



export default function Index(){
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState(''); 

    function adicionar (){
        setNumeros([...numeros, numero])
        setNumero(0);
    }
   async function verificarMaior(){
        const resp = await axios.post('http://localhost:5000/maior', numeros)
        setResposta(resp.data.maior);
      
    }

    return(
        <main>
            <h1>MaiorNumero</h1>

        <div>
            Numero: <input type= 'text' value={numero} onChange={e => setNumero(Number(e.target.value))} /> <button onClick={adicionar}> Adicionar Numero</button>
        </div>
        <div>
            {numeros.map(item =>
              <div>{item} </div>
            )}
         </div>
        <div>
            <button onClick={verificarMaior}>Verificar</button> O Maior Numero é {resposta}
        </div>

        </main>
    )

}