import eastBlueImage from '../assets/east-Blue.webp';
import alabastaImage from '../assets/alabasta.webp';
import celestialIslandImage from '../assets/celestialIsland.webp';
import waterSevenImage from '../assets/waterSeven.webp';
import thrillerBarkImage from '../assets/thrillerBark.webp';
import warAtTheTopImage from '../assets/warAtTheTop.webp';
import ileDesHommesImage from '../assets/ileDesHommes.webp';
import dressrosaImage from '../assets/dressrosa.webp';
import foursEmperorsImage from '../assets/foursEmperors.webp';
import finalSagaImage from '../assets/finalSaga.webp';

const arcosData = {
    1: {
        id: 'East Blue',
        image: eastBlueImage,
        description: 'La saga de East Blue marca el inicio de la gran aventura de Monkey D. Luffy. En esta parte, el joven pirata zarpa de su villa natal para reclutar a la tripulación que lo acompañará en su búsqueda del One Piece. Durante su viaje, conoce y se alía con Roronoa Zoro, el espadachín; Nami, la navegante; Usopp, el tirador; y Sanji, el cocinero. Cada uno tiene su propio sueño y se enfrenta a sus primeros y más importantes enemigos, como el Capitán Buggy, el Capitán Kuro y Arlong. Esta saga no solo establece los cimientos de la amistad de la tripulación, sino también sus motivaciones y la escala del vasto mundo de One Piece.',
    },
    2: {
        id: 'Alabasta',
        image: alabastaImage,
        description: 'La saga de Alabasta se centra en el viaje de la tripulación del Sombrero de Paja a través del Grand Line para llevar a la princesa Nefertari Vivi de vuelta a su reino y evitar una guerra civil. La causa del conflicto es la organización criminal Baroque Works, liderada por el poderoso Shichibukai, Sir Crocodile. Los Sombrero de Paja deben enfrentarse a los agentes de Crocodile en su camino a la capital. La saga culmina en una intensa batalla donde Luffy pone a prueba sus límites para derrotar a Crocodile y salvar a Alabasta. Al final, la tripulación se despide de Vivi y un nuevo miembro se une a ellos: la misteriosa Nico Robin.',
    },
    3: {
        id: 'Celestial Island',
        image: celestialIslandImage,
        description: 'La saga de la Isla del Cielo comienza cuando la tripulación del Sombrero de Paja descubre un misterioso mapa que apunta a una isla en el cielo. Tras un emocionante viaje impulsado por un "knock-up stream", llegan a Skypiea, una tierra legendaria. Allí, se ven envueltos en un conflicto entre los habitantes de la isla y el opresivo "Dios" Enel. Luffy y sus amigos luchan para liberar a la isla del tirano, desvelando la historia de la antigua ciudad de oro, Shandora, y cumpliendo un antiguo deseo. Es una saga de pura aventura y fantasía, donde descubren un nuevo Poneglyph y logran tocar el legendario Golden Bell.',
    },
    4: {
        id: 'Water Seven',
        image: waterSevenImage,
        description: 'La saga de Water Seven es una de las más cruciales para los Piratas del Sombrero de Paja. La tripulación llega a la famosa "Ciudad del Agua" en busca de un carpintero para reparar su barco, el Going Merry. Sin embargo, su llegada desata una serie de eventos dramáticos: la partida de Usopp, la traición de Nico Robin y el ataque de la organización de élite del Gobierno Mundial, CP9. La saga culmina con la épica batalla de Enies Lobby, donde Luffy y su tripulación declaran la guerra al Gobierno para rescatar a Robin. Es una historia de lealtad, sacrificio y el nacimiento de un nuevo barco, el Thousand Sunny.',
    },
    5: {
        id: 'Thriller Bark',
        image: thrillerBarkImage,
        description: 'La saga de Thriller Bark lleva a la tripulación del Sombrero de Paja a una misteriosa isla flotante que, en realidad, es el barco más grande del mundo. En este lugar lúgubre, la tripulación se enfrenta al Shichibukai Gecko Moria y a su ejército de zombis. Durante esta aventura, conocen a Brook, un esqueleto con una trágica historia que busca recuperar su sombra robada. La saga culmina en una batalla desesperada por salvar a la tripulación y a Brook. Finalmente, Brook se une como el músico de la banda y se produce uno de los momentos más memorables de la serie, el gran sacrificio de Roronoa Zoro.',
    },
    6: {
        id: 'MarineFord',
        image: warAtTheTopImage,
        description: 'La saga de Marineford, también conocida como la Guerra en la Cumbre, es uno de los arcos más importantes y dramáticos de la serie. La historia se centra en el desesperado intento de Luffy por rescatar a su hermano, Portgas D. Ace, de su ejecución pública a manos de la Marina. Para lograrlo, Luffy se une a una masiva coalición de piratas liderada por Barbablanca. Lo que sigue es una guerra total entre los Piratas de Barbablanca y las fuerzas del Gobierno Mundial. La saga está llena de acción y dolor, y culmina con eventos que cambian para siempre el equilibrio de poder en el mundo de One Piece con la muerte de Ace a manos de Akainu en frente de Luffy.',
    },
    7: {
        id: 'Ile des Hommes',
        image: ileDesHommesImage,
        description: 'Después de dos años de riguroso entrenamiento, la tripulación del Sombrero de Paja se reúne para aventurarse en el Nuevo Mundo. Su primer desafío es cruzar la Isla Gyojin, una tierra submarina. Allí, se ven envueltos en un conflicto con Hody Jones, un gyojin que ha tomado el control de la isla. Esta saga explora temas de racismo y prejuicio entre humanos y gyojins. Luffy cumple una profecía, se hace amigo de la princesa sirena Shirahoshi, y finalmente desafía al Yonko Big Mom, marcando el comienzo de su ascenso en el Nuevo Mundo.',
    },
    8: {
        id: 'Dressrosa',
        image: dressrosaImage,
        description: 'La saga de Dressrosa se desarrolla en un reino bajo el control del Shichibukai Donquixote Doflamingo. La tripulación del Sombrero de Paja, junto con la Alianza de Piratas de Trafalgar Law, llega a la isla con el objetivo de destruir la fábrica de Frutas del Diablo artificiales (SMILE). Esto desencadena un masivo conflicto donde la tripulación se enfrenta a la familia de Doflamingo y al tiránico control que ejerce sobre el reino. La saga está llena de batallas épicas, revelaciones impactantes y el sufrimiento de un pueblo que lucha por su libertad.',
    },
    9: {
        id: 'Fours Emperors',
        image: foursEmperorsImage,
        description: 'La saga de los Cuatro Emperadores es una de las más extensas y ambiciosas de toda la serie. En ella, la tripulación del Sombrero de Paja se enfrenta directamente a dos de los piratas más poderosos del mundo: el Yonko Big Mom y el Yonko Kaido. Esta saga se divide en varias partes, incluyendo la Isla Zou, donde descubren información crucial sobre los Road Poneglyphs; la Isla Whole Cake, donde intentan rescatar a Sanji; y el País de Wano, donde forman una gran alianza para derrocar a Kaido y abrir las fronteras del reino. Es una saga llena de batallas masivas y revelaciones que sacuden los cimientos del mundo de los piratas.',
    },
    10: {
        id: 'Final Saga',
        image: finalSagaImage,
        description: 'Tras años de búsqueda y batallas épicas, la aventura de los Piratas del Sombrero de Paja ha llegado a su clímax. La saga final ha comenzado, y el destino del mundo pende de un hilo. El One Piece está más cerca que nunca, y con él, la verdad sobre el Siglo Vacío y la historia de un mundo que se ha mantenido oculto durante 800 años. La tripulación se prepara para su enfrentamiento definitivo contra los últimos grandes poderes, en una era de piratas y leyendas que está a punto de llegar a su emocionante conclusión.',
    },
};

export default arcosData;