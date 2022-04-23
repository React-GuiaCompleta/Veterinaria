import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);
  return (
    // Cuando la pantalla es de celular no hay scroll, cuando está media (m) se crea el scroll
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center ">Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      {pacientes.map((paciente, index) => (
        <Paciente
          key={index}
          paciente={paciente}
        />
      ))}
    </div>
  )
}
export default ListadoPacientes

