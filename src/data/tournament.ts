export interface Trio {
  id: number;
  name: string;
  players?: string[];
}

export type GamePhase =
  | '1° Fase'
  | 'ressorteio'
  | 'mata-mata';

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
    name: 'Padaria Zini',
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
   /* createGame({
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
  }) , */

  /* createGame({
    id: 2,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 4,
    trioB: 3, 
    status: 'upcoming'
  }) , */

  /* createGame({
    id: 3,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 15,
    trioB: 10, 
    status: 'upcoming'
  }) , */

  /* createGame({
    id: 5,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 11, 
    trioB: 13, 
    status: 'upcoming'
  }) , */

   /* createGame({
    id: 6,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Cancha do CTG B',
    venueShort: 'CTG B ',
    trioA: 22, 
    trioB: 20, 
    status: 'upcoming'
  }) , */

  /* createGame({
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
  }) , */

   /* createGame({
    id: 8,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Clube União A',
    venueShort: 'UNIAO A',
    trioA: 21, 
    trioB: 12, 
    status: 'upcoming'
  }) , */

    /* createGame({
    id: 9,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 5,
    trioB: 17,
    status: 'upcoming'
  }) , */


  /* createGame({
    id: 10,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 23,
    trioB: 6,
    status: 'upcoming'
  }) , */

  /* createGame({
    id: 11,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Cancha do CTG B',
    venueShort: 'CTG B',
    trioA: 7,
    trioB: 19,
    status: 'upcoming'
  }) , */

  /* createGame({
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
  }) , */

/*   createGame({
    id: 12,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 23, 
    trioB: 7, 
    status: 'upcoming'
  }) , */
  
  /* createGame({
    id: 13,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 16, 
    trioB: 21, 
    status: 'upcoming'
  }) , */

  /* createGame({
    id: 14,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 5, 
    trioB: 10, 
    status: 'upcoming'
  }) , */

  /* createGame({
    id: 15,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Cancha do CTG B',
    venueShort: 'CTG B',
    trioA: 3, 
    trioB: 13, 
    status: 'upcoming'
  }) , */

  /*  createGame({
    id: 16,
    phase: 'ressorteio',
    phaseLabel: 'ressorteio',
    date: '05/09/2026',
    time: '14:30',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 22, 
    trioB: 9 , 
    status: 'upcoming'
  }) ,  */

   /* createGame({
    id: 17,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 1, 
    trioB: 7 , 
    status: 'upcoming'
  }) , 

  createGame({
    id: 18,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '17:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 2, 
    trioB: 19 , 
    status: 'upcoming'
  }) ,

  createGame({
    id: 19,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '15:00',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 4, 
    trioB: 14 , 
    status: 'upcoming'
  }) , 

   createGame({
    id: 20,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 5, 
    trioB: 12 , 
    status: 'upcoming'
  }) ,

    createGame({
    id: 21,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '15:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 18, 
    trioB: 13 , 
    status: 'upcoming'
  }) ,

  createGame({
    id: 22,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 17, 
    trioB: 11 , 
    status: 'upcoming'
  }) ,

   createGame({
    id: 23,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '15:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 20, 
    trioB: 6   , 
    status: 'upcoming'
  }) ,

   createGame({
    id: 23,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 9, 
    trioB: 21   , 
    status: 'upcoming'
  }) , */

  // A PARTIR DE AQUI VALENDO AGORA =====

 createGame({
    id: 25,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '18:30',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 15, 
    trioB: 19   , 
    status: 'upcoming'
  }),

   createGame({
    id: 26,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '18:30',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 11, 
    trioB: 6   , 
    status: 'upcoming'
  }),

  createGame({
    id: 27,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '18:30',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 9, 
    trioB: 4, 
    status: 'upcoming'
  }),

  createGame({
    id: 28,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '19:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 12, 
    trioB: 18, 
    status: 'upcoming'
  })

  // --------------- JOGOS DO RESORTEIO -----------------


];

/*
|--------------------------------------------------------------------------
| RESULTADOS
|--------------------------------------------------------------------------
*/

export const results: Game[] = [

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
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 1
  }) ,

  createGame({
    id: 2,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 4,
    trioB: 3, 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 4
  }) ,

  createGame({
    id: 3,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 15,
    trioB: 10, 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 15
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
    status: 'finished',
    scoreA: 9,
    scoreB: 12,
    winner: 14
  }) ,

  createGame({
    id: 5,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 11, 
    trioB: 13, 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 11
  }) ,

  createGame({
    id: 6,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '09:00',
    venue: 'Cancha do CTG B',
    venueShort: 'CTG B ',
    trioA: 22, 
    trioB: 20, 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 20
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
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 18
  }) ,

  createGame({
    id: 8,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Clube União A',
    venueShort: 'UNIAO A',
    trioA: 21, 
    trioB: 12, 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 12
  }) ,

  createGame({
    id: 9,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 5,
    trioB: 17,
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 17
  }) ,

  createGame({
    id: 10,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 23,
    trioB: 6,
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 6
  }) ,

  createGame({
    id: 11,
    phase: '1° Fase',
    phaseLabel: '1ª Fase',
    date: '05/09/2026',
    time: '10:00',
    venue: 'Cancha do CTG B',
    venueShort: 'CTG B',
    trioA: 7,
    trioB: 19,
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 19
  }) ,

    createGame({
    id: 12,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 23, 
    trioB: 7, 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 7
  }) ,

  createGame({
    id: 13,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 16, 
    trioB: 21, 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 21
  }) ,

  createGame({
    id: 14,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 5, 
    trioB: 10, 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 5
  }) ,

  createGame({
    id: 15,
    phase: 'ressorteio',
    phaseLabel: 'Ressorteio',
    date: '05/09/2026',
    time: '13:30',
    venue: 'Cancha do CTG B',
    venueShort: 'CTG B',
    trioA: 3, 
    trioB: 13, 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 13
  }) ,

   createGame({
    id: 16,
    phase: 'ressorteio',
    phaseLabel: 'ressorteio',
    date: '05/09/2026',
    time: '14:30',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 22, 
    trioB: 9 , 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 9
  }) ,

  createGame({
    id: 17,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 1, 
    trioB: 7 , 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 7
  }) , 

  createGame({
    id: 18,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '17:00',
    venue: 'Cancha da AABB',
    venueShort: 'AABB',
    trioA: 2, 
    trioB: 19 , 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 19
  }) ,

  createGame({
    id: 19,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '15:00',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 4, 
    trioB: 14 , 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 4
  }) , 

  createGame({
    id: 20,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Clube União A',
    venueShort: 'União A',
    trioA: 5, 
    trioB: 12 , 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 12
  }) ,

  createGame({
    id: 21,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '15:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 18, 
    trioB: 13 , 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 18
  }) ,

  createGame({
    id: 22,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Clube União B',
    venueShort: 'União B',
    trioA: 17, 
    trioB: 11 , 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 11
  }) ,
  
   createGame({
    id: 23,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '15:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 20, 
    trioB: 6   , 
    status: 'finished',
    scoreA: 0,
    scoreB: 1,
    winner: 6
  }) ,

  createGame({
    id: 24,
    phase: 'mata-mata',
    phaseLabel: 'Mata-mata',
    date: '05/09/2026',
    time: '16:00',
    venue: 'Cancha do CTG A',
    venueShort: 'CTG A',
    trioA: 9, 
    trioB: 21   , 
    status: 'finished',
    scoreA: 1,
    scoreB: 0,
    winner: 9
  }) 
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
      name: 'Cancha do CTG A',
      description: 'Jogos realizados nas canchas do CTG.',
      icon: 'C',
      mapsUrl: 'https://maps.app.goo.gl/abxdc49NQoPy3mGL9'
    },
    {
      name: 'Cancha  do CTG B',
      description: 'Jogos realizados nas canchas do CTG.',
      icon: 'C',
      mapsUrl: 'https://maps.app.goo.gl/abxdc49NQoPy3mGL9'
    },
    {
      name: 'Clube União A',
      description: 'Jogos realizados no Clube União.',
      icon: 'U',
      mapsUrl: 'https://maps.app.goo.gl/ZBG4YW8bJex7R5oH8'
    },
     {
      name: 'Clube União B',
      description: 'Jogos realizados no Clube União.',
      icon: 'U',
      mapsUrl: 'https://maps.app.goo.gl/ZBG4YW8bJex7R5oH8'
    }
  ],

  trios,
  nextGames,
  results,
  allGames
};