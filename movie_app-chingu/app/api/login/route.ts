import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const search = await prisma.user.findMany()
  console.log(search)

  if (search.length > 0) {
    const res = ``
    return NextResponse.json(res)
  } else {
    const res = `Registred users: ${search}`
    return NextResponse.json(res)
  }
}
