import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Modules/activity";
import { ActivityComponent } from "./Activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <ActivityComponent
            activity={activity}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
          />
        ))}
      </Item.Group>
    </Segment>
  );
}
