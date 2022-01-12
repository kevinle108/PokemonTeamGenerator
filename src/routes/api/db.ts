import { prisma } from "$lib/prisma";

export const get =async (request) => {
  console.log('from server')  
  const teams = await prisma.team.findMany({
    include: {
      teamMembers: true
    }
  })
  console.log(teams)
  // teams.map(team => {
  //   return {
  //     teamName: team.teamName,
  //     members: async () => {
  //       await prisma.pokemon.findMany()
  //     }
  //   }
  // });
  // const members = await prisma.pokemon.findMany()

  return {
    status: 200,
    body: teams
  }    
}