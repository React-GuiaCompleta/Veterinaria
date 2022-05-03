import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    // Solo se ejecuta cuando...
    // object.keys() comprueba si un objeto tiene algo
    // y para editar debe haber informacion escrita anteriormente
    // true or false
    if (Object.keys(paciente).length > 0) {
      // la info que hay en paciente pasala a cada estado del formulario 
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
    // paciente haya cambiado, osea luego de hacer click en editar
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validacion del formulario 
    // includes: si incluye un campo vacio que el usuario no ha llenado
    // nunca entrará acá si llena todos los campos osea si está en false
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio')
      // Si das click en enviar estando los campos vacios cambia de false a true
      // el estado [error]
      setError(true)
      return
    } // Si no, osea si llenas todos los campos vuelve a false, osea sin el mensaje
    setError(false)

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      //al tener un paciente luego de dar click en editar manda toda la info del objeto al
      //formulario y si le damos click en editar paciente crea el objeto y ademas le crea
      // un nuevo id y necesitamos es el mismo id, no uno nuevo
      // id: generarId()
    }
    // Si paciente existe, sino diga que nuevo registro, el primer click en
    // agregar paciente sale editando porque no hay copia de paciente, al segundo
    // click en editar paciente, ve que hay una copia en paciente osea si existe
    // y muestra editando
    if (paciente.id) {
      //Editando
      // al objeto que estamos cambiando con la nueva info le colocamos el id
      // del objeto que vamos a editar que es inmutable
      objetoPaciente.id = paciente.id
      console.log(objetoPaciente);
      // el id que tenemos en paciente.id lo ponemos en pacienteState.id
      // pacientes tiene su id, si este id es igual a paciente.id que es el que estamos
      // llenando editando muestre el objetoPaciente sino muestre lo que habia 
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
        // cuando recorre y ve un objeto que no es igual, debe dejarlo y mostrarlo tal cual
        paciente.id ? objetoPaciente : pacienteState )

        setPacientes(pacientesActualizados)
        // Aqui se limpia
        setPaciente({})

    } else {
      //Nuevo registro
      objetoPaciente.id = generarId()
      // ... toma una copia de lo que hay en pacientes, 
      setPacientes([...pacientes, objetoPaciente])
    }
    // console.log(objetoPaciente)

    // Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg: w-5/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        //Al hacer click en agregar paciente (enviar) ejecuta la funcion handlesubmit de arriba
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {/* Si error es true, imprima todos los...si es false nunca mostrará nada */}
        {error && <Error>
          <p> Todos los campos son obligatorios  </p>
        </Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            value={nombre}
            // Lo podemos hacer todo en una linea o haciendo una funcion handled
            onChange={(e) => setNombre(e.target.value)}
          // onChange={handleSubmit}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propetario"
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        {/* hover: Al pasar el cursor cambia de color a uno mas fuerte 
            cursor pointer: al pasar el cursor cambia a una manito*/}
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-all"
          // Si paciente.id existe
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
