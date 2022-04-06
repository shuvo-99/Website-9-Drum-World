import React from "react";
import { Card } from "react-bootstrap";

const Card = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Card;

// import React from "react";

// const CardGroup = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default CardGroup;