import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Endereco from './components/Endereco/Endereco';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fplu4-1.fna.fbcdn.net/v/t1.0-9/37612814_1780186652057258_8581497261890994176_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=hl1QGJzrXZsAX91kqCd&_nc_ht=scontent.fplu4-1.fna&oh=7d393eb5b1bd674f63fdad964fcde102&oe=5EBAE309" 
          nome="Bernardo Arduini" 
          descricao="Oi, eu sou Bernardo. Estudante da Labenu_. Tenho 30 anos, moro em BH e sou formado em Administracao. Sou novo no mundo dos DEV, e estou apaixonado por essa experiencia. Apesar de estar sempre quebrando a cabeca com tantas informacoes, nao me canso de recebe-las! "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />             
     </div>

<div className="page-section-container">
     <CardPequeno
     icone=""
     negrito="Email:"
     normal="berzin-@hotmail.com"
     />
</div>
<div className="page-section-container">
     <Endereco
     icone=""
     negrito="Endereco:"
     normal="BH / MG Brasil"
     />
</div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Canada/Toronto" 
          descricao="A maior experiencia da minha vida foi 2 anos sozinho em Toronto/CA. Aprendi a ser uma pessoa mais independente, responsavel e sempre correr atras de meus objetivos." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
