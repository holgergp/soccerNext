import LeagueTable from "../components/LeagueTable/LeagueTable";
import React from "react";
import { SAMPLE_LEAGUE_TABLE } from "./api/SampleData";
import { TeamType } from "../components/LeagueTable/Positions";
interface Props {
  positions: TeamType[];
}
export default function Home(props: Props) {
  return (
    <div className="text-center w-full">
      <h1 className="text-2xl pb-2 pt-2 font-bold">
        Kickertabelle zum Selberstecken
      </h1>
      <LeagueTable positions={props.positions} />
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //  const res = await fetch("https://.../posts");
  //const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      positions: SAMPLE_LEAGUE_TABLE,
    },
  };
}
