import React from 'react';
import { Link } from 'react-router-dom';
import mugiwaraImages from '../utils/mugiwaraImages.ts';
import { ApiPersonaje } from '../types.ts';

interface PersonajesListadoProps {
    personajes: ApiPersonaje[];
}

const PersonajesListado: React.FC<PersonajesListadoProps> = ({ personajes }) => {
    return (
        <div className="grid gap-6 p-5 max-w-screen-xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {personajes.map(personaje => (
                <Link to={`/personaje/${personaje.id}`} key={personaje.id} className="bg-blue-950 bg-opacity-70 rounded-lg shadow-2xl p-5 text-center hover:shadow-yellow-600">
                    <img
                        src={mugiwaraImages[personaje.id]}
                        alt={personaje.name}
                        className="w-full h-40 object-cover rounded-md border-2 mb-4 shadow-md"
                    />
                    <div className="mt-2">
                        <h4 className="font-luckiest text-2xl text-yellow-600">{personaje.name}</h4>
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default PersonajesListado;
