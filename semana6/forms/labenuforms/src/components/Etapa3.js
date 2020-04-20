import React from "react";

export class Etapa3 extends React.Component {
    render() {
        return (
            <div className={"App"}>

                <h3>ETAPA 3 - INFORMACOES GERAIS DE ENSINO</h3>
                <div>
                    <p>7. Por que voce nao terminou um curso de graduacao?</p>
                    <input></input>
                </div>
                <div>
                    <p>8. Voce fez algum curso complementar?</p>
                    <select>
                        <option value="Nenhum">Nenhum</option>
                        <option value="Curso Tecnico">Curso Tecnico</option>
                        <option value="Curso de Ingles">Curso de Ingles</option>
                    </select>
                </div>
                <button>Proxima Etapa</button>


            </div>
        );
    }
}
