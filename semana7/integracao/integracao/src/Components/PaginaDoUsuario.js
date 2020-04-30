import React from "react";
import axios from "axios";


export class PaginaDoUsuario extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };

  onChangeName = event => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ emailValue: event.target.value });
  };

  onClickCriar = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "darvas"
          }
        }
      )
      .then(response => {
        window.alert("Usuario criado com sucesso!");
      })
      .catch(error => {
        console.log(error.response);
        window.alert("Erro na Solicitacao");
      });

    this.setState({ nameValue: "", emailValue: "" });
  };

  render() {
    return (
      <FormContainer>
        <input
          placeholder={"Nome"}
          value={this.state.nameValue}
          onChange={this.onChangeName}
        />
        <input
          placeholder={"Email"}
          value={this.state.emailValue}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.onClickCriar}>Criar</button>
      </FormContainer>
    );
  }
}
