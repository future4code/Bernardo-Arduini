import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'Amelinha'}
          fotoUsuario={'https://picsum.photos/50/56'}
          fotoPost={'https://picsum.photos/200/152'}
        />
        <Post
          nomeUsuario={'Leonaldo'}
          fotoUsuario={'https://picsum.photos/50/57'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </div>
    );
  }
}

export default App;
