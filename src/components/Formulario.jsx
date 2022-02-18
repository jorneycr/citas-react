import { useState, useEffect } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('Hook');
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
            <p className="text-lg mt-5 text-center mb-5">Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-10">
                <div className="mb-5">
                    <label
                        className="block text-gray-700 px-2 uppercase font-bold"
                        htmlFor="mascota"
                    >Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 px-2 uppercase font-bold"
                        htmlFor="propietario"
                    >Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 px-2 uppercase font-bold"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 px-2 uppercase font-bold"
                        htmlFor="alta"
                    >Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 px-2 uppercase font-bold"
                        htmlFor="sintomas"
                    >Sintomas</label>
                    <textarea
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomasz"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Agregar paciente"
                />
            </form>
        </div>
    );
}

export default Formulario;