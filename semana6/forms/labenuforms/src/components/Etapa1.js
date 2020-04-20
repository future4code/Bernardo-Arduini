import React from "react";

export class etapa1 extends React.Component {
    render() {
        return (
            <div className={"App"}>

                <div className="App">
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                    <div>
                        <p>1. Qual o seu nome?</p>
                        <input></input>
                    </div>

                    <div>
                        <p>2. Qual sua idade?</p>
                        <input></input>
                    </div>

                    <div>
                        <p>3. Qual seu Email?</p>
                        <input></input>
                    </div>

                    <div>
                        <p>4. Qual sua escolaridade?</p>
                        <select>
                            <option value="Ensino medio incompleto">Ensino medio incompleto</option>
                            <option value="Ensino medio completo">Ensino medio completo</option>
                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            <option value="Ensino superior completo">Ensino superior completo</option>
                        </select>
                    </div>
                    <button onClick={this.props.onClickLogin}>Proxima Etapa</button>

                </div>
            </div>
        );

    }
}
