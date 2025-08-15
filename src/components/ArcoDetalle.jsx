import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import arcosData from '../utils/arcosData';

const ArcoDetalle = () => {
    const { id } = useParams();
    const [arco, setArco] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const datosArco = arcosData[id];
        if (datosArco) {
            setArco(datosArco);
        } else {
            setError('Arco no encontrado. ¡Quizás está en una isla inexplorada!');
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="loading-container"><h1>Cargando...</h1></div>;
    }
    if (error) {
        return <div className="error-container"><h1>{error}</h1></div>;
    }

    return (
        <div className="bg-opacity-80 p-8 min-h-screen text-white">
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center">
                    <h1 className="font-bangers text-5xl text-yellow-400 mb-4">{arco.id}</h1>
                    <img
                        src={arco.image}
                        alt={arco.title || arco.name}
                        className="w-80 h-auto rounded-lg shadow-lg mx-auto border-4"
                    />
                </div>
                <div className="mt-8 text-lg bg-blue-900 bg-opacity-50">
                    <p className="mb-2"><span className="font-luckiest font-bold text-yellow-500 underline">Descripción:</span> <span className="font-luckiest text-yellow-400 text-lg">{arco.description}</span></p>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to="/" className="px-6 py-2 bg-yellow-500 text-blue-800 font-luckiest font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300 text-xl">
                    ONE PIECE
                </Link>
            </div>
        </div>
    );
};
export default ArcoDetalle;