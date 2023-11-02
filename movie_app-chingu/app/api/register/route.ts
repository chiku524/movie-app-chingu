import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const name = await req.json()
    const reservation = await prisma.user.create({
      data: {
        name: name,
        email: "ssfd",
      },
    })
    return NextResponse.json(reservation)
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
