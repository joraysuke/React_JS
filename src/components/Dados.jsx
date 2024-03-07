import {} from 'react'

function Dados(props){

    return(
        <>
        <p>O nome do usuário é:{props.nome}</p>
        <p>O email é: {props.email}</p>

        </>
    )
}

export default Dados