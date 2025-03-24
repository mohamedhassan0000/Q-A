import { Col, Container, Row } from "react-bootstrap";
import Form from "./Form";
import {formData} from "./data"
import { useState } from "react";

function App() {

  const [data, setData] = useState(formData)

  // save
  const save = () =>{
    localStorage.setItem("items", JSON.stringify([...formData]))
    setData([...formData])
  }

  // delete all
  const deleteAll = () => {
    localStorage.removeItem("items")
    setData([])
  }

  // delete one item
  const deleteItem = (item) => {
    localStorage.setItem("items", JSON.stringify([...item]))
    setData([...item])
  }
  
  return (
    <Container>
      <Row className="d-flex justify-content-lg-between justify-content-sm-center flex-lg-row flex-md-row flex-column py-3">
        <Col className=" col-sm-12  text-center fs-3 ">
          اسئله واجوبه شائعه
        </Col>
          <Form data={data} save={save} deleteAll={deleteAll} deleteItem={deleteItem}/>
      </Row>
    </Container>
  );
}

export default App;
