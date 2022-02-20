const Paciente = ({ pacient }) => {

    const {nombre, propietario, email, fecha, sintomas} = pacient;

    return (

        <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <spam className="font-normal normal-case">{nombre}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <spam className="font-normal normal-case">{propietario}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                <spam className="font-normal normal-case">{email}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
                <spam className="font-normal normal-case">{fecha}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                <spam className="font-normal normal-case">{sintomas}</spam>
            </p>
        </div>
    )
}

export default Paciente