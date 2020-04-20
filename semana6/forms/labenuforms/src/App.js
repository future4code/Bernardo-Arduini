import React from 'react';
import { etapa1 } from './components/Etapa1';
import { etapa2 } from './components/Etapa2';
import { etapa3 } from './components/Etapa3';

class App extends React.Component {
  state = {
    etapa: 1,
  };

  render() {

    renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />
        case 2:
          return <Etapa2 />
        case 3:
          return <Etapa3 />
        case 4:
          return <Etapa4 />
      }
    }

    irParaProximaEtapa = () => {
    }
    return (
      <div className = { "App"}>
        <h1>LabenuForms</h1>
        {this.renderizaEtapa()}
        <button onClick = {this.irParaProximaEtapa()}>Proxima Etapa</button>
        </div>
    )
}
}


export default App;
