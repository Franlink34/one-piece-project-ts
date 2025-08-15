import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import personajesData from '../utils/personajesData';
import mugiwaraImages from '../utils/mugiwaraImages';

const PersonajeDetalle = () => {
    const { id } = useParams();
    const [personaje, setPersonaje] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPersonaje = async () => {
            try {
                const res = await axios.get(`https://api.api-onepiece.com/v2/characters/en/${id}`);
                const personajeConDatosLocales = {
                    ...res.data,
                    ...personajesData[id],
                };
                setPersonaje(personajeConDatosLocales);
            } catch (err) {
                setError(err.message || 'No se pudo encontrar la información del personaje.');
            } finally {
                setLoading(false);
            }
        };
        fetchPersonaje();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-opacity-70 text-yellow-400 text-4xl font-bold tracking-wider">
                <h1>Buscando a tu personaje...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-red-900 bg-opacity-70 text-white text-4xl font-bold tracking-wider p-8 text-center">
                <h1>¡Alerta Pirata! {error}</h1>
                <Link to="/" className="mt-4 px-4 py-2 bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300">
                    Volver a la tripulación
                </Link>
            </div>
        );
    }
    return (
        <div className="bg-opacity-80 p-8 min-h-screen text-white">
            <div className="max-w-4xl mx-auto p-6">
                <div className="text-center">
                    <h1 className="font-luckiest text-5xl text-yellow-400 mb-4">{personaje.name}</h1>
                    <img
                        src={personajesData[personaje.id]?.image || mugiwaraImages[personaje.id]}
                        alt={personaje.name}
                        className="w-80 h-auto rounded-lg shadow-lg mx-auto"
                    />
                </div>
                <div className="mt-8 text-lg bg-blue-900 bg-opacity-50">
                    <p className="mb-2 font-luckiest text-yellow-400"><span className="font-bold text-yellow-500 underline">Rol:</span> {personaje.role}</p>
                    <p className="mb-2 font-bangers text-yellow-400"><span className="font-bold text-yellow-500 underline">Descripción:</span> {personaje.description}</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to="/" className="px-6 py-2 bg-yellow-500 text-blue-900 font-luckiest font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300 text-xl">
                    ONE PIECE
                </Link>
            </div>
        </div>
    );
};

export default PersonajeDetalle