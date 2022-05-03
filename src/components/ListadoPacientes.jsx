import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {/* Si hay pacientes ejecute todo ( sino : imprima no hay pacientes */}
      {/* Tambien : pacientes.length > 0 */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              // Prop
              paciente={paciente} // yaaa
              // Estado paciente
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando a tus pacientes {''}
            <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
export default ListadoPacientes

