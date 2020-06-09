import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

const criarPost = () => {
    const utils = render(<App/>)
    
    const addBotao = utils.getByText(/adicionar/i)

    fireEvent.change(inputPost, {target: {value: 'text'} })

    fireEvent.click(addBotao)

    return utils
}
TextDecoderStream("Adicionar post", () => {
    const {getByText} = criarPost()

    const novoPost = getByText(/teste/i)

    expect(novoPost).toHaveTextConstent(/teste/i)
})
TextDecoderStream("clickar em curtir e/ou discutir", () => {
    const {getByText} = criarPost()

    const botaoCurtir = getByText(/curtir/i)

    fireEvent.click(botaoCurtir)

    const botaoDescurtir = getByText(/descurtir/i)
})
