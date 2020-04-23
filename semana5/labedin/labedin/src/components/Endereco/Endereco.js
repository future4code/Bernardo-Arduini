import React from 'react';
import './Endereco.css'

function Endereco(props) {
    return (
        <div className="classeEndereco">
            <img src={props.icone} />
            <p><b>{props.negrito}</b> {props.normal} </p>
        </div>

    )
}

export default Endereco;