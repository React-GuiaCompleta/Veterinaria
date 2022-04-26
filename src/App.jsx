import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([])
  // Nuevo estado para tomar el objeto con la info inmutable y mandarlo al 
  // formulario para su edicion y es {} porque ahí está el objetoPaciente
  const [paciente, setPaciente] = useState({})
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
        />
        <ListadoPacientes
          // Copia inmutable para poderla mostrar
          pacientes={pacientes}
          // Va a modificar la parte para boton editar
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}

export default App;

