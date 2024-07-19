import { type NextRequest } from 'next/server'
import { sql } from "@vercel/postgres";
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('name')

  const pokemon = await sql`SELECT * FROM pokemons WHERE name = ${query};`;

  return Response.json({ "pokemon": pokemon.rows[0].data})
}