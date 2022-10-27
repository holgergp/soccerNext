import React, { useState } from "react";
import Position from "../Position/Position";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
  TeamType,
} from "./Positions";
import { SAMPLE_LEAGUE_TABLE } from "../../pages/api/SampleData";

const LeagueTable = () => {
  const [positions, setPositions] = useState<TeamType[]>(SAMPLE_LEAGUE_TABLE);
  // TODO load data

  const swapPositions = (sourceTeamId: string, targetTeamId: string) => {
    setPositions(
      recalculateSwappedPositions(sourceTeamId, targetTeamId, positions)
    );
  };

  const updateTeamname = (team: TeamType, updatedText: string) => {
    setPositions(
      recalculatePositionsWithRenamedTeam(team, updatedText, positions)
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid gap-y-1 place-items-center leagueTable">
        {positions.map((team, index) => (
          <Position
            team={team}
            rank={index + 1}
            key={index}
            swapPositions={swapPositions}
            updateTeamname={updateTeamname}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default LeagueTable;
