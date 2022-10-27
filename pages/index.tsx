import LeagueTable from "../components/LeagueTable/LeagueTable";
import React from "react";

export default function Home() {
  return (
    <div className="text-center w-full">
      <h1 className="text-2xl pb-2 pt-2 font-bold">
        Kickertabelle zum Selberstecken
      </h1>
      <LeagueTable />
    </div>
  );
}
