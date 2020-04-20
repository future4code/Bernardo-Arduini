import React from "react";

export class Etapa2 extends React.Component {
    render() {
        return (
            <div className={"App"}>

                <h3>ETAPA 2 - INFORMACOES DO ENSINO SUPERIOR</h3>
                <div>
                    <p>5. Qual o curso?</p>
                    <input></input>
                </div>
                <div>
                    <p>6. Qual a unidade de ensino?</p>
                    <input></input>
                </div>
                <button onClick={this.props.onClickLogout}>Proxima Etapa</button>

            </div>
        );
    }
}
