import React from "react";
import { Card, Image, Icon, Button, ButtonGroup } from "semantic-ui-react";
import { Activity } from "../../../App/Modules/activity";

interface Props {
  activity: Activity;
  canselSelectActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({
  activity,
  canselSelectActivity,
  openForm,
}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths="2">
          <Button
            onClick={() => openForm(activity.id)}
            basic
            color="blue"
            content="Edit"
          ></Button>
          <Button
            onClick={canselSelectActivity}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
}
