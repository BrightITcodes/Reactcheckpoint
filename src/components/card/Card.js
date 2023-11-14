import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { carddetails } from "../../data";

function MainCard() {
  return (
    <div className="d-flex  gap-3 mt-5">
      {carddetails.map((item) => (
        <div key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "16rem" }}
              variant="top"
              src={item.Img}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
              <Button variant="primary">See More</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MainCard;
