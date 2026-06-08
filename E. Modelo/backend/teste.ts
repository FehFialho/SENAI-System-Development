import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log("Conectado com sucesso!");
}

main().catch(e => {
  console.error("Erro de conexão:", e);
});