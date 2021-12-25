import { prisma } from "../src/lib/prisma";
import { teams, teamMembers } from "./starterData";

async function main() {


  await prisma.team.createMany({
    data: teams
  });

  await prisma.pokemon.createMany({
    data: teamMembers
  });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
