import React from "react";
import axios from "axios";


export class ListaDoUsuario extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "bernardo"
          }
        }
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  onClickDeleteUser = userId => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "bernardo"
          }
        }
      )
      .then(response => {
        window.alert("Deletado");
        this.getUsersList();
      })
  };

  render() {
    return (
      <div>
        <h1>Lista de usuários</h1>
        <div>
          {this.state.usersList.map(user => {
            return (
              <UserItem>
                <p>{user.name}</p>
                <button onClick={() => this.onClickDeleteUser(user.id)}>
                  Apagar
                </button>
              </UserItem>
            );
          })}
        </div>
      </div>
    );
  }
}
