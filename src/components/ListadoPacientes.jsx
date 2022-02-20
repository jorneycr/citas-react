import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
      <p className="text-lg mt-5 mb-5 text-center">
        Administra tus {' '}
        <spam className="text-indigo-600 font-bold">Pacientes y Citas</spam>
      </p>
      {pacientes.map((pacient, i) => (
        <Paciente
          key={i}
          pacient={pacient}
        />
      ))}

    </div>
  )
}

export default ListadoPacientes