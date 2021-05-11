import { observer } from "mobx-react-lite";
import React from "react";
import { Item, Segment } from "semantic-ui-react";

import { useStore } from "../../../App/Stores/store";
import { ActivityComponent } from "./ActivityComponent";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, ActivitiesByDate, loading } = activityStore;

  return (
    <Segment>
      <Item.Group divided>
        {ActivitiesByDate.map((activity) => (
          <ActivityComponent
            submitting={loading}
            key={activity.id}
            activity={activity}
            selectActivity={() => activityStore.selectActivity(activity.id)}
            deleteActivity={deleteActivity}
          />
        ))}
      </Item.Group>
    </Segment>
  );
});
