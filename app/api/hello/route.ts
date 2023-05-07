import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(request: Request) {
  console.log('hello')

  const users = await prisma.user.findMany() || []
  console.log(users)

  return NextResponse.json({ users: users });
}
