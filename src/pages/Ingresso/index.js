import axios from "axios"
import { useState } from "react"



export default function Index(){
    const [inteira, setInteira] = useState(0);
    const [meia, setMeia] = useState(0);
    const [dia, setDia] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);
   
    async function calcular(){
        const resp = await axios.post('http://localhost:5000/ingresso', {
            inteira:inteira,
            meia:meia,
            dia:dia,
            nacionalidade:nacionalidade        
        })

        setTotal(resp.data.total);

    }

    

    return(
        <main>
            <h1>Ingresso</h1>

        <div>
            Qtd. Inteiras : <input type= 'text' value = {inteira} onChange={e => setInteira(Number(e.target.value))} />
        </div>
        <div>
            Qtd. Meias : <input type= 'text' value = {meia} onChange={e => setMeia(Number(e.target.value))} />
        </div>
        <div>
            Dia da Semana : <input type= 'text' value = {dia} onChange={e => setDia(e.target.value)} />
        </div>
        <div>
           Nacionalidade : <input type= 'text' value = {nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
        </div>
            <div>
            <button onClick={calcular}>Calcular</button>
            </div>
        <div>
            O total é R$ {total}
        </div>

        </main>
    )

}