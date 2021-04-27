import React, { useState } from "react";
import { Button, Label } from "semantic-ui-react";
import Item from "semantic-ui-react/dist/commonjs/views/Item";
import { Activity } from "../../../App/Modules/activity";

interface Props {
  activity: Activity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export function ActivityComponent({
  activity,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(e: any, id: string) {
    setTarget(e.target.name);
    deleteActivity(id);
  }

  return (
    <Item>
      <Item.Content>
        <Item.Header as="a">{activity.title}</Item.Header>
        <Item.Meta>{activity.date}</Item.Meta>
        <Item.Description>
          <div>{activity.description}</div>
          <div>
            {activity.city} , {activity.venue}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            onClick={() => selectActivity(activity.id)}
            floated="right"
            content="View"
            color="blue"
          ></Button>
          <Button
            name={activity.id}
            loading={submitting && target === activity.id}
            onClick={(e) => handleActivityDelete(e, activity.id)}
            floated="right"
            content="Delete"
            color="red"
          ></Button>
          <Label basic content={activity.category}></Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
