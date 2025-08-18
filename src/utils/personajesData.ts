import { PersonajesData } from '../types.ts';
import luffyImage from '../assets/luffy.webp';
import zoroImage from '../assets/zoro.webp';
import namiImage from '../assets/nami.webp';
import usoppImage from '../assets/usopp.webp';
import sanjiImage from '../assets/sanji.webp';
import chopperImage from '../assets/chopper.webp';
import robinImage from '../assets/robin.webp';
import frankyImage from '../assets/franky.webp';
import brookImage from '../assets/brook.webp';
import jinbeImage from '../assets/jinbe.webp';

const personajesData: PersonajesData = {
    "1": {
        role: 'Capitán de los Piratas del Sombrero de Paja',
        image: luffyImage,
        description: 'El capitán de la tripulación. Su sueño es convertirse en el Rey de los Piratas. Tras comer la Fruta del Diablo Gomu Gomu, su cuerpo adquirió las propiedades del caucho. Es conocido por su inquebrantable determinación, su amor por la aventura y su gran apetito.',
    },
    "2": {
        role: 'Espadachín de la Tripulación',
        image: zoroImage,
        description: 'El primer miembro en unirse. Es un maestro del estilo de tres espadas y tiene el sueño de convertirse en el mejor espadachín del mundo. Su actitud estoica y su terrible sentido de la orientación son sus rasgos más distintivos.',
    },
    "3": {
        role: 'Navegante de los Piratas del Sombrero de Paja',
        image: namiImage,
        description: 'La navegante de la tripulación. Es una genio de la cartografía y una hábil ladrona con un gran ojo para el dinero. Su sueño es dibujar un mapa de todo el mundo. Es la encargada de guiar al barco a través de los peligrosos mares del Grand Line.',
    },
    "4": {
        role: 'Francotirador del Barco',
        image: usoppImage,
        description: 'El francotirador del barco. Conocido por sus increíbles habilidades con la puntería y su gran imaginación para inventar armas y artilugios. Sueña con convertirse en un valiente guerrero de los mares y siempre cuenta historias exageradas de sus hazañas.',
    },
    "5": {
        role: 'Cocinero del Barco',
        image: sanjiImage,
        description: 'El cocinero del barco. Un caballero de buen corazón con una debilidad por las mujeres. Su estilo de lucha se basa en patadas. Su sueño es encontrar el legendario All Blue, un mar donde confluyen todos los océanos del mundo.',
    },
    "6": {
        role: 'Médico de la Tripulación',
        image: chopperImage,
        description: 'Un reno que comió la Fruta del Diablo Hito Hito, dándole la habilidad de hablar y transformarse. Es el médico de la tripulación. A pesar de ser tímido, tiene una gran dedicación a su trabajo y una enorme curiosidad.',
    },
    "7": {
        role: 'Arqueóloga de la Tripulación',
        image: robinImage,
        description: 'La arqueóloga de la tripulación. Comió la Fruta del Diablo Hana Hana, que le permite hacer florecer partes de su cuerpo en cualquier superficie. Es una de las pocas personas capaces de leer los Poneglyphs y su sueño es descubrir la historia real del Siglo Vacío.',
    },
    "8": {
        role: 'Carpintero y Cyborg de la Tripulación',
        image: frankyImage,
        description: 'El carpintero y cyborg de la tripulación. Es un experto constructor de barcos y responsable del Thousand Sunny. Se alimenta de cola y su personalidad excéntrica y su gran fuerza son su sello de identidad. Su sueño es construir un barco capaz de viajar por todo el mundo.',
    },
    "9": {
        role: 'Músico de la Tripulación',
        image: brookImage,
        description: 'Un esqueleto que comió la Fruta del Diablo Yomi Yomi, permitiéndole vivir después de la muerte. Es el músico de la tripulación y un maestro espadachín. Su sueño es reunirse con la ballena Laboon, que lo espera al final del Grand Line.',
    },
    "10": {
        role: 'Timonel del Barco',
        image: jinbeImage,
        description: 'Un tritón y ex-Shichibukai que se unió a la tripulación. Es un maestro del Karate Gyojin y un timonel excepcional. Su principal objetivo es proteger a su gente y ayudar a Luffy a cumplir su sueño.',
    },
};

export default personajesData;