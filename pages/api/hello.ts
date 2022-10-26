// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SAMPLE_LEAGUE_TABLE } from "./SampleData";
import { TeamType } from "../../components/LeagueTable/Positions";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamType[]>
) {
  res.status(200).json(SAMPLE_LEAGUE_TABLE);
}
