import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('name')

  const responseDb = await sql`SELECT * FROM pokemons WHERE name = ${query};`;
  const result = responseDb.rows[0].data

  return NextResponse.json({ "pokemon": JSON.stringify(result) }, { status: 200 })
}