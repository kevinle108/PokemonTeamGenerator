/// <reference types="@sveltejs/kit" />

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

type Team = {
  id: int, 
  createdAt: Date, 
  teamName: string,
  teamMembers: Pokemon[]
}

type Pokemon = {
  id: int, 
  createdAt: Date,
  pokemonName: string,
  pokemonId: int,
  teamId: int
}