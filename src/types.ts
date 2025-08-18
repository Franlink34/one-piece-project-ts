export interface ApiPersonaje {
    id: number;
    name: string;
    origin: string;
    image: string;
    bounty: string;
}

export interface Personaje {
    role: string;
    image: string;
    description: string;
}

export type PersonajesData = Record<string, Personaje>;

export interface Arco {
    title: string;
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface ArcosImages {
    [key: string]: string;
}

export interface MugiwaraImages {
    [key: string]: string;
}