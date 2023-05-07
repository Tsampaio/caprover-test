import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('hello')
  const prisma = new PrismaClient()


  const users = await prisma.user.findMany()
  console.log(users)

  return NextResponse.json({ users: users });
}
