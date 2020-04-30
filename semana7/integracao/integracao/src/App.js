import React from "react";
import "./styles.css";
import { PaginaDoUsuario } from "./Components/PaginaDoUsuario";
import { ListaDoUsuario } from "./components/ListaDoUsuario";

class App extends React.Component {
  state = {
    currentPage: "FORM"
  };

  onClickChangePage = () => {
    const nextPage = this.state.currentPage === "FORM" ? "LIST" : "FORM";

    this.setState({ currentPage: nextPage });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickChangePage}>
          {this.state.currentPage === "FORM"
            ? "Ir para lista"
            : "Voltar para form"}
        </button>
        {this.state.currentPage === "FORM" ? (
          <UserFormPage />
        ) : (
          <UsersListPage />
        )}
      </div>
    );
  }
}

export default App;
