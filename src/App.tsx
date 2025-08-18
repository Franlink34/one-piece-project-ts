import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.tsx';
import ArcosListado from './components/ArcosListado.tsx';
import PersonajesListado from './components/PersonajesListado.tsx';
import Footer from './components/Footer.tsx';
import PersonajeDetalle from './components/PersonajeDetalle.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ArcoDetalle from './components/ArcoDetalle.tsx';
import { Arco, ApiPersonaje } from './types.ts';

function App() {
  const [personajes, setPersonajes] = useState<ApiPersonaje[]>([]);
  const [arcos, setArcos] = useState<Arco[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const arcosRes = await axios.get<Arco[]>('https://api.api-onepiece.com/v2/sagas/en');
        console.log(arcosRes.data);
        setArcos(arcosRes.data);

        const personajesRes = await axios.get<ApiPersonaje[]>('https://api.api-onepiece.com/v2/characters/en');
        console.log(personajesRes.data);
        setPersonajes(personajesRes.data.slice(0, 10));

        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('Ocurrió un error inesperado');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-opacity-70 text-yellow-400 text-4xl font-bold tracking-wider">
        <h1>Cargando datos del Grand Line...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-900 bg-opacity-70 text-white text-4xl font-bold tracking-wider p-8 text-center">
        <h1>¡Alerta Pirata! Los datos no se pudieron cargar.</h1>
        <p className="mt-4 text-2xl">{error}</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section>
                  <h2 className="text-center text-yellow-400 text-3xl font-luckiest p-4 rounded-lg mb-8">Arcos y Sagas</h2>
                  <ArcosListado arcos={arcos} />
                </section>
                <section>
                  <h2 className="text-center text-yellow-400 text-3xl font-luckiest p-4 rounded-lg mb-8">Tripulación de los Mugiwara</h2>
                  <PersonajesListado personajes={personajes} />
                </section>
              </>
            } />
            <Route path="/personaje/:id" element={<PersonajeDetalle />} />
            <Route path="/arco/:id" element={<ArcoDetalle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;