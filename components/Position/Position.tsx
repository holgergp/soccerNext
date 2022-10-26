import React from 'react';
import { useDrop } from 'react-dnd';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import {
  ItemTypes,
  TeamType
} from "../LeagueTable/Positions";

interface Props {
  rank: number,
  swapPositions: (sourceTeamId: string, targetTeamId: string) => void,
  team: TeamType,
  updateTeamname:  (team: TeamType, updatedText: string) => void,
}

const Position = (props: Props) => {
  const team = props.team;
  const rank = props.rank;
  const updateTeamname = props.updateTeamname;
  const swapPositions = props.swapPositions;
  const dropReturn = useDrop({
    accept: ItemTypes.TEAM,
    drop: () => ({ team }),
  });
  return (
    <div ref={dropReturn[1]}>
      <Team
        team={team}
        rank={rank}
        updateTeamname={updateTeamname}
        swapPositions={swapPositions}
      />
    </div>
  );
};

Position.propTypes = {
  rank: PropTypes.number.isRequired,
  swapPositions: PropTypes.func.isRequired,
  team: PropTypes.object.isRequired,
  updateTeamname: PropTypes.func.isRequired,
};

export default Position;
