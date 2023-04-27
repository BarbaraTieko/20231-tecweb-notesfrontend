import React, {useState} from 'react';
import './index.css';
import axios from 'axios';

export default function Formulario(props){
    const [titulo, setTitulo] = useState("");
    const [conteudo, setContent] = useState("");


    const salvarNota = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/notes/", {title:titulo, content:conteudo})
            .then((response) => {
                props.carregaNotas();
                setTitulo("");
                setContent("");
            })

    }

    const atualizaTitulo = (event) => {
        setTitulo(event.target.value);
    }

    return (
        <form className="form-card" onSubmit={salvarNota}>
        <input
          className="form-card-title"
          type="text"
          name="titulo"
          placeholder="Título"
          onChange={atualizaTitulo}
          value={titulo}
        />
        <textarea
          className="autoresize"
          name="detalhes"
          placeholder="Digite o conteúdo..."
          onChange={(event) => {setContent(event.target.value)}}
          value={conteudo}
        ></textarea>
        <button className="btn" type="submit">Criar</button>
      </form>
    );
}