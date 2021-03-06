import {
  Card,
  Image,
  Button,
  ButtonGroup,
} from "semantic-ui-react";
import LoadingComponent from "../../../App/Layout/LoadingComponent";

import { useStore } from "../../../App/Stores/store";

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivtiy,
  } = activityStore;

  if (!activity) return <LoadingComponent />;

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
            onClick={cancelSelectedActivtiy}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
}
