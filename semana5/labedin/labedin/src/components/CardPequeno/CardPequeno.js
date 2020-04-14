import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="classeEmail">
            <img src={props.icone} />
            <p><b>{props.negrito}</b> {props.normal} </p>
        </div>

    )
}

export default CardPequeno;