import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {

	}

	onChangeValorH1 = (event) => {
		this.setState({ valorH1: event.target.value });
	  };

	onChangeComentario() {

	}

	render() {
		return <div className={'comment-container'}>
			<input
				onChange={this.onChangeValorH1}
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={''}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}


