import { useDrag } from "react-dnd";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { ItemTypes, TeamType } from "../LeagueTable/Positions";

interface Props {
  rank: number;
  swapPositions: (sourceTeamId: string, targetTeamId: string) => void;
  team: TeamType;
  updateTeamname: (team: TeamType, updatedText: string) => void;
}

const Team = (props: Props) => {
  const { rank, team, updateTeamname } = props;

  const dragReturn = useDrag({
    type: ItemTypes.TEAM,
    item: { team },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
      const dragItem = monitor.getItem();
      const dropResult: { team: TeamType } | null = monitor.getDropResult();
      if (dropResult) {
        props.swapPositions(dragItem.team.id, dropResult.team.id);
      }
    },
  });

  const onChange = (evt: ContentEditableEvent) => {
    updateTeamname(team, evt.target.value);
  };

  return (
    <div ref={dragReturn[1]}>
      <ContentEditable
        onChange={onChange}
        role={"button"}
        className="textPointer"
        html={team.name}
        disabled={true}
      />
    </div>
  );
};

export default Team;
