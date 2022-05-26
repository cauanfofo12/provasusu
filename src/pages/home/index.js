import { Link } from "react-router-dom";


export default function index(){

    return(
        <main>
            <h1>Home</h1>


        <ul>
            <li> <Link to = '/corPrimaria'> Cor Primaria </Link>  </li>
            <li> <Link to = '/Ingresso'> Ingresso </Link>  </li>
            <li> <Link to = '/MaiorNumero'> Maior Numero </Link>  </li>
            <li> <Link to = '/Texto'> Texto </Link>  </li>
        </ul>


        </main>
    )

}