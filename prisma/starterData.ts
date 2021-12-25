export const teams = [
  {
    teamName: 'Red',
  },
  {
    teamName: 'Blue'
  },
  {
    teamName: 'Legendaries'
  },
];

export const teamMembers = [
  {
    pokemonName: 'Charizard',
    pokemonId: 6,
    teamId: 1
  },
  {
    pokemonName: 'Persian',
    pokemonId: 53,
    teamId: 1
  },
  {
    pokemonName: 'Dodrio',
    pokemonId: 85,
    teamId: 1
  },
  {
    pokemonName: 'Jolteon',
    pokemonId: 135,
    teamId: 1
  },
  {
    pokemonName: 'Lapras',
    pokemonId: 131,
    teamId: 1
  },
  {
    pokemonName: 'Scyther',
    pokemonId: 123,
    teamId: 1
  },
  {
    pokemonName: 'Exeggutor',
    pokemonId: 103,
    teamId: 2
  },
  {
    pokemonName: 'Arcanine',
    pokemonId: 59,
    teamId: 2
  },
  {
    pokemonName: 'Rhydon',
    pokemonId: 112,
    teamId: 2
  },
  {
    pokemonName: 'Gyrados',
    pokemonId: 130,
    teamId: 2
  },
  {
    pokemonName: 'Machamp',
    pokemonId: 68,
    teamId: 2
  },
  {
    pokemonName: 'Pidgeot',
    pokemonId: 18,
    teamId: 2
  },
  {
    pokemonName: 'Mewtwo',
    pokemonId: 150,
    teamId: 3
  },
  {
    pokemonName: 'Mew',
    pokemonId: 151,
    teamId: 3
  },
  {
    pokemonName: 'Ho-Oh',
    pokemonId: 250,
    teamId: 3,
  },
  {
    pokemonName: 'Lugia',
    pokemonId: 249,
    teamId: 3
  },
  {
    pokemonName: 'Rayquaza',
    pokemonId: 384,
    teamId: 3
  },
  {
    pokemonName: 'Deoxys',
    pokemonId: 386,
    teamId: 3
  },
];

// model Team {
//   id        Int      @id @default(autoincrement())
//   createdAt DateTime @default(now()) @db.Timestamp(6)
//   teamName     String   @db.VarChar(255)
//   teamMembers Pokemon[]
// }

// model Pokemon {
//   id        Int      @id @default(autoincrement())
//   createdAt DateTime @default(now()) @db.Timestamp(6)
//   pokemonName String @db.VarChar(255)
//   pokemonId Int
//   teamId Int
//   team Team @relation(fields: [teamId], references: [id])  
// }

