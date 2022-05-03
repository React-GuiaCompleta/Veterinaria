import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // ??: ejecuta la expresion del lado derecho cuando el izquierdo es null o undefined
  // al abrir o recargar la pagina si no hay nada o eliminan pacientes[] en el localStorage
  // crea el []
  // JSON.parse toma el string que está en el Storage y lo transforma en un objeto
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  // la primera vez en la pagina muestra el objeto vacio, al agregar paciente se guarda
  // en pacientesLS y al recargar el estado inicial es lo que hay en pacientesLS
  const [pacientes, setPacientes] = useState(pacientesLS)
  // Nuevo estado para tomar el objeto con la info inmutable y mandarlo al 
  // formulario para su edicion y es {} porque ahí está el objetoPaciente
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    // al agregar un paciente, lo manda al Storage
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          // Prop que = lleva el estado pacientes para tener una copia inmutable
          pacientes={pacientes}
          setPacientes={setPacientes}
          // objeto que se llena en el estado paciente cuando se hace click en editar
          paciente={paciente}
          // paciente trae el objeto del map que le dimos editar y lo deja ahí en memoria
          // lo mandamos a formulario para su eliminacion
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          // Copia inmutable para poderla mostrar
          pacientes={pacientes}
          // Va a modificar la parte para boton editar
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

