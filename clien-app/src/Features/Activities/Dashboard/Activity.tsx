import React from "react";
import { Button, Label } from "semantic-ui-react";
import Item from "semantic-ui-react/dist/commonjs/views/Item";
import { Activity } from "../../../App/Modules/activity";

interface Props {
  activity: Activity;
  selectActivity:(id:string)=>void;
  deleteActivity:(id:string)=>void;
}

export function ActivityComponent({activity,selectActivity,deleteActivity}:Props) {
  return (
    <Item key={activity.id}>
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
            onClick={() => deleteActivity(activity.id)}
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
