import { useDrag } from "react-dnd";
import React from "react";
import classNames from "classnames";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { ItemTypes, TeamType } from "../LeagueTable/Positions";

const calculatePositionCssClass = (positionNumber: number) => {
  if (positionNumber === 1) {
    return "tabellenfuehrerClass tabelleClass";
  }
  if (positionNumber <= 3) {
    return "championsLeagueClass tabelleClass";
  }
  if (positionNumber <= 6) {
    return "europaLeagueClass tabelleClass";
  }
  if (positionNumber <= 15) {
    return "mittelfeldClass tabelleClass";
  }
  if (positionNumber === 16) {
    return "relegationClass tabelleClass";
  } else {
    return "abstiegClass tabelleClass";
  }
};

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

  const classes = classNames(
    "col-md-12",
    "btn",
    "text-bold",
    calculatePositionCssClass(rank)
  );

  const onChange = (evt: ContentEditableEvent) => {
    updateTeamname(team, evt.target.value);
  };

  return (
    <div className={classes} style={{ cursor: "pointer" }} ref={dragReturn[1]}>
      <ContentEditable
        onChange={onChange}
        role={"button"}
        className="textPointer"
        html={team.name}
      />
    </div>
  );
};

export default Team;
