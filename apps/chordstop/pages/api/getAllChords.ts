import type { NextApiRequest, NextApiResponse } from "next";

import { prismaClient } from "../../prisma/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const chords = (
    await prismaClient.chord.findMany({
      select: {
        id: true,
        title: true,
        artistLabel: true,
      },
    })
  ).map((chord) => {
    return {
      label: chord.artistLabel + " - " + chord.title,
      id: chord.id,
    };
  });
  res.status(200).json({ chords });
}