import React, { useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postNewCategory } from "../../pages/category/categoryAction";

const initialState = {
  name: "",
  description: "",
};

export const AddNewPaymentMethodForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // dispatch(postNewCategory({ name }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(postNewCategory(formData));
    setFormData(initialState);
  };

  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="text-center border p-4 rounded shadow-lg"
      >
        <Row>
          <Col>
            <Form.Control
              placeholder="payment Method"
              name="name"
              onChange={handleOnChange}
              value={formData.name}
              required
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Description"
              name="description"
              onChange={handleOnChange}
              value={formData.description}
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="warning">
              Add New Payment Method
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
