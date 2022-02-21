import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Administra tus {' '}
            <spam className="text-indigo-600 font-bold">Pacientes y Citas</spam>
          </p>
          {pacientes.map(pacient => (
            <Paciente
              key={pacient.id}
              pacient={pacient}
              setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Comienza agregando pacientes {' '}
            <spam className="text-indigo-600 font-bold">ya mismo</spam>
          </p>
        </>
      )}



    </div>
  )
}

export default ListadoPacientes