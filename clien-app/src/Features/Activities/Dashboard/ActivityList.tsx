import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Modules/activity";
import { ActivityComponent } from "./ActivityComponent";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <ActivityComponent
            submitting={submitting}
            key={activity.id}
            activity={activity}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
          />
        ))}
      </Item.Group>
    </Segment>
  );
}
