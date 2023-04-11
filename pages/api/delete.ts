import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import { prismadb } from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "DELETE") {
      console.log(req.method);

      const { id, movie } = req.body;
      console.log("req.mehot", req.method);
      console.log("id", id);
      console.log("movie", movie);
      console.log("req.body", req.body);

      res.status(201).send({ id, movie });
    }

    if (req.method === "GET") {
      const { id, movie } = req.body;
      const { value } = req.query;
      console.log("body", req.body);
      console.log("query", value);
      console.log("movie", movie);

      res.status(201).send({ value, id });
    }

    if (req.method === "POST") {
      const { id, movie } = req.body;
      const { value } = req.query;
      console.log("req.mehot", req.method);
      console.log("id", id);
      console.log("movie", movie);
      console.log("req.body", req.body);

      res.status(201).send({ id, movie });
    }
  } catch (error) {
    console.log("error", error);
    res.status(405).json("id");
  }
}
