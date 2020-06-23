import * as fs from 'fs'

function boasvindas(ola: string): void{
  const arquivos: string = 'exercicios.jason'
  const arquivobuffer: Buffer = fs.readFilesSync(arquivos) || []
  const texto: string = arquivoBuffer.soString()
  const frases: String[] = JSON.parse(texto)

  frase.push(ola)

  const tarefaAtualizadas: string = JSON.stringify(frase)

  fs.writeFileSync(arquivos, tarefaAtualizadas)
   
}

const texto: string= process.argv[2]
const nome: string= process.argv[3]
const idade: string= process.argv[4]

console.log('olá '+nome+" voce tem "+idade)
/ nm

boasvindas('')