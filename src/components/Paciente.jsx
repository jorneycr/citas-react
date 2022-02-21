const Paciente = ({ pacient, setPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas } = pacient;

    return (

        <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase mr-1 rounded-md"
                    onClick={() => setPaciente(pacient)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase mr-1 rounded-md"
                >Eliminar</button>
            </div>
        </div>

    )
}

export default Paciente