import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

prisma.users.findMany();

export async function create(property){
    const result = await prisma.property.create({
        data: property
    });

    return result;
}