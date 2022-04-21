import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      {/* flex coloca todo en una linea */}
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
