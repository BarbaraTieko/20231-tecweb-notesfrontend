import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Note from "./components/Note";
import Appbar from "./components/Appbar"
import Formulario from "./components/Formulario";

function App() {
  const [notes, setNotes] = useState([]); 

  const carregaNotas = () => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  }

  useEffect(() => {
    carregaNotas();
  }, []);

  return (
    <div className="App">
      <Appbar/>
      <main className="container">
        <Formulario  carregaNotas={carregaNotas}/>
        <div className="card-container">
        {notes.map((note) => (
          <Note key={`note__${note.id}`} title={note.title}>
            {note.content}
          </Note>
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;