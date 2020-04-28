import React from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  state = {
    playlists: [],
    playlistTracks: [],
    newPlaylistNameValue: ""
  };

  componentDidMount() {
    this.pegaPlaylists();
  }

  pegaPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "darvas"
          }
        }
      )
      .then(resposta => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  mostraMusicas = playlistId => {
    console.log(playlistId);
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" +
          playlistId +
          "/tracks",
        {
          headers: {
            Authorization: "darvas"
          }
        }
      )
      .then(response => {
        console.log(response.data.result.tracks);
        this.setState({ playlistTracks: response.data.result.tracks });
      });
  };

  onChangePlaylistName = event => {
    this.setState({ newPlaylistNameValue: event.target.value });
  };

  onCreatePlaylist = () => {
    this.criarPlaylist(this.state.newPlaylistNameValue);
  };

  criarPlaylist = playlistName => {
    const body = {
      name: playlistName
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "darvas"
          }
        }
      )
      .then(resposta => {
        console.log("UHUL DEU CERTO!!!!!", resposta);
        this.pegaPlaylists();
      })
      .catch(error => {
        console.log("DEU ERRO :((((", error.response);
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h4>Criar playlist</h4>
          <input
            placeholder={"Nome da playlist"}
            value={this.state.newPlaylistNameValue}
            onChange={this.onChangePlaylistName}
          />
          <button onClick={this.onCreatePlaylist}>Criar</button>
        </div>
        <div>
          <h4>Minhas playlists</h4>
          {this.state.playlists.map(playlist => {
            return (
              <button onClick={() => this.mostraMusicas(playlist.id)}>
                {playlist.name}
              </button>
            );
          })}
        </div>

        {this.state.playlistTracks.map(track => {
          return (
            <p>
              <a href={track.url}>{track.name}</a>
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;