export interface Trio {
  id: number;
  name: string;
  players?: string[];
}

export type GamePhase =
  | '1° Fase'
  | 'redraw'
  | 'knockout';

export interface GameData {
  id: number;
  phase: GamePhase;
  phaseLabel: string;
  date: string;
  time: string;
  venue: string;
  venueShort: string;
  trioA: number;
  trioB: number;
  status: 'upcoming' | 'finished';
  scoreA?: number;
  scoreB?: number;
  winner?: number;
}

export interface Game {
  id: number;
  phase: GamePhase;
  phaseLabel: string;
  date: string;
  time: string;
  venue: string;
  venueShort: string;
  trioA: Trio;
  trioB: Trio;
  status: 'upcoming' | 'finished';
  scoreA?: number;
  scoreB?: number;
  winner?: Trio;
}

/*
|--------------------------------------------------------------------------
| TRIOS
|--------------------------------------------------------------------------
*/

export const trios: Trio[] = [
  {
    id: 1,
    name: 'AABB A',
   // players: ['João', 'Pedro', 'Carlos']
  },
  {
    id: 2,
    name: 'AABB B',
    //players: ['José', 'Paulo', 'Luiz']
  },
  {
    id: 3,
    name: 'Avenida Pinhal',
    //players: ['Antônio', 'Marcos', 'Beto']
  },
  {
    id: 4,
    name: 'Parceria JC União',
    //players: ['Roberto', 'Sérgio', 'Eduardo']
  },
  {
    id: 5,
    name: 'São João A',
    //players: ['Nilo', 'Miguel', 'Davi']
  },
  {
    id: 6,
    name: 'São João B',
   // players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 7,
    name: 'Farrapos - Agro Linassi Pejuçara',
    //players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 8,
    name: 'Cancha do Cara',
    //players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 9,
    name: 'Pedreira Gomes',
   // players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 10,
    name: 'AABB Cruz Alta',
   // players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 11,
    name: '25 de Julho - Arroio do Tigre',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 12,
    name: 'São Manuel A',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 13,
    name: 'São Manuel B',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 14,
    name: 'Inter Cruz Santa Maria',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 15,
    name: 'CTG Júlio de Castilhos',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 16,
    name: 'Asservinjuc',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 17,
    name: 'Botafogo',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 18,
    name: 'Agrícola Vendrame',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 19,
    name: 'Posto Ferrari',
  //  players: ['André', 'Chico', 'Rafael']
  },
  {
    id: 20,
    name: 'Agropecuária Richter/RM Prestadores',
  //  players: ['André', 'Chico', 'Rafael']
  },
   {
    id: 21,
    name: 'AASMT Tupã',
  //  players: ['André', 'Chico', 'Rafael']
  },
   {
    id: 22,
    name: 'CTG B',
  //  players: ['André', 'Chico', 'Rafael']
  },
   {
    id: 23,
    name: 'Bom Sucesso',
  //  players: ['André', 'Chico', 'Rafael']
  },
];

/*
|--------------------------------------------------------------------------
| FUNÇÕES
|--------------------------------------------------------------------------
*/

export function getTrio(id: number): Trio {
  const trio = trios.find((trio) => trio.id === id);

  if (!trio) {
    throw new Error(`Trio com ID ${id} não encontrado.`);
  }

  return trio;
}

export function createGame(game: GameData): Game {
  return {
    ...game,
    trioA: getTrio(game.trioA),
    trioB: getTrio(game.trioB),
    winner: game.winner ? getTrio(game.winner) : undefined
  };
}

/*
|--------------------------------------------------------------------------
| PRÓXIMOS JOGOS
|--------------------------------------------------------------------------
*/

export const nextGames: Game[] = [
   createGame({
    id: 1,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 1,
    trioB: 16,
    status: 'upcoming'
  }) ,

  createGame({
    id: 2,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Clube União',
    venueShort: 'União A',
    trioA: 4,
    trioB: 3, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 3,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '9:00',
    venue: 'Canchas do CTG',
    venueShort: 'CTG A',
    trioA: 15,
    trioB: 10, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 4,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 2, 
    trioB: 14, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 5,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Cancha do União',
    venueShort: 'União B',
    trioA: 11, 
    trioB: 13, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 6,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'CTG B',
    venueShort: 'AABB',
    trioA: 22, 
    trioB: 20, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 7,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '11:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 9, 
    trioB: 18, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 8,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '11:00',
    venue: 'União A',
    venueShort: 'AABB',
    trioA: 21, 
    trioB: 12, 
    status: 'upcoming'
  }) ,

  createGame({
    id: 9,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '11:00',
    venue: 'Canchas do CTG',
    venueShort: 'CTG A',
    trioA: 5,
    trioB: 17,
    status: 'upcoming'
  }) ,

  createGame({
    id: 10,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '12:00',
    venue: 'União B',
    venueShort: 'AABB',
    trioA: 23,
    trioB: 6,
    status: 'upcoming'
  }) ,

  createGame({
    id: 11,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '12:00',
    venue: 'Canchas do CTG',
    venueShort: 'CTG B',
    trioA: 7,
    trioB: 19,
    status: 'upcoming'
  }) 

];

/*
|--------------------------------------------------------------------------
| RESULTADOS
|--------------------------------------------------------------------------
*/

export const results: Game[] = [
  /*createGame({
    id: 10,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '13:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 7,
    trioB: 8,
    status: 'finished',
    scoreA: 12,
    scoreB: 8,
    winner: 7
  }),
  */
];

/*
|--------------------------------------------------------------------------
| TODOS OS JOGOS
|--------------------------------------------------------------------------
*/

export const allGames: Game[] = [
  ...results,
  ...nextGames
];

/*
|--------------------------------------------------------------------------
| INFORMAÇÕES DO TORNEIO
|--------------------------------------------------------------------------
*/

export const tournament = {
  name: 'Torneio de Inauguração',
  subtitle: 'Torneio de Trios de Bocha',
  venue: 'AABB',
  city: 'Júlio de Castilhos - RS',
  date: '05 e 06 de setembro de 2026',

  totalTrios: trios.length,

  venues: [
    {
      name: 'Cancha da AABB',
      description: 'A cancha sede do torneio.',
      icon: 'A',
      mapsUrl: 'https://maps.app.goo.gl/MyiRfjXYrfmc6Z3A7'
    },
    {
      name: 'Canchas do CTG',
      description: 'Jogos realizados nas canchas do CTG.',
      icon: 'C',
      mapsUrl: 'https://maps.app.goo.gl/abxdc49NQoPy3mGL9'
    },
    {
      name: 'Clube União',
      description: 'Mais um local parceiro da competição.',
      icon: 'U',
      mapsUrl: 'https://maps.app.goo.gl/ZBG4YW8bJex7R5oH8'
    }
  ],

  trios,
  nextGames,
  results,
  allGames
};