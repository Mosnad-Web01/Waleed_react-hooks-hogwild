import React from "react";
import { Card, Image } from "semantic-ui-react";

const HogTile = ({ hog }) => {
  return (
    <Card>
      <Image src={hog.image} alt={hog.name} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <Card.Meta>{hog.specialty}</Card.Meta>
        <Card.Description>
          <p>Weight: {hog.weight} kg</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default HogTile;