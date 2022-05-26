import axios from "axios";
import { useState } from "react"



export default function Index(){
    const [txt, setTxt] = useState('');
    const [caracter, setCaracter] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificar(){
        const resp = await axios.get(`http://localhost:5000/texto/${txt}/${caracter}`)

        setResposta(resp.data.valor);
    }


    return(
        <main>
            <h1>Texto</h1>

        <div>
            Texto: <input type='text' value ={txt} onChange={e => setTxt(e.target.value)}  />
        </div>
        <div>
            Caractere: <input type='text' value ={caracter} onChange={e => setCaracter(e.target.value)} />
        </div>
        <div>
            <button onClick={verificar}>Verificar</button>
        </div>
        <div>
            Frequencia: {resposta}
        </div>

        </main>
    )

}