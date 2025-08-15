import React from 'react';
import { Link } from 'react-router-dom';
import arcosImages from '../utils/arcosImages';

const ArcosListado = ({ arcos }) => {
    return (
    <div className="grid gap-8 p-5 sm:grid-cols-2 md:grid-cols-4">
        {arcos.map(arco => (
            <Link 
            to={`/arco/${arco.id}`} 
            key={arco.id} 
            className="bg-blue-900 bg-opacity-70 text-white rounded-lg shadow-2xl p-6 hover:scale-105 hover:shadow-yellow-600 flex flex-col justify-between"
            >
            <div>
                <h3 className="font-luckiest font-bold text-3xl text-yellow-400 mb-2">{arco.title || arco.name || 'Arco sin título'}</h3>
            </div>
            <div className="w-full h-64 overflow-hidden rounded-lg border-2">
                <img 
                    src={arcosImages[arco.id]}
                    alt={arco.title || arco.name}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {arco.description && <p className="text-gray-200 text-base mt-4 font-luckiest flex-grow">{arco.description}</p>}
        </Link>
        ))}
    </div>
    );
};
export default ArcosListado;