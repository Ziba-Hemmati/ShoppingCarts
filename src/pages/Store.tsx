import { Col, Row } from "react-bootstrap";
import StoreItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-3">
        {StoreItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
