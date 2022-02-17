const Paciente = () => {
    return (
        <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <spam className="font-normal normal-case">Hook</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <spam className="font-normal normal-case">Daniel</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                <spam className="font-normal normal-case">correo@correo.com</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
                <spam className="font-normal normal-case">10/10/2022</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                <spam className="font-normal normal-case">Lorem</spam>
            </p>
        </div>
    )
}

export default Paciente