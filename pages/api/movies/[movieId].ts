import { NextApiRequest, NextApiResponse } from "next";

import { prismadb } from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // verificamos que el metodo solo sea get
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    // verificamos que el user este logueado
    await serverAuth(req, res);

    // obtenemos el movieId del query
    const { movieId } = req.query;

    // verificamos que exista el movieId
    if (typeof movieId !== "string" || !movieId) {
      throw new Error("Invalid ID");
    }

    // encontramos la pelicula
    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    // verificamos que exista la pelicula
    if (!movie) {
      throw new Error("Invalid ID");
    }

    // respondemos con la pelicula
    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
