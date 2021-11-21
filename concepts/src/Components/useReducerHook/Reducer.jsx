import React, { useReducer } from "react";
import {
  Title,
  Input,
  Row,
  Button,
  List,
  ListItems,
  Section,
} from "../commonstyle";

const initialState = {
  firstname: "",
  lastname: "",
  age: "",
  email: "",
  university: "",
  phone: "",
  country: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstname":
      return { ...state, [action.data.key]: action.data.payload };
    case "lastname":
      return { ...state, [action.data.key]: action.data.payload };
    case "age":
      return { ...state, [action.data.key]: action.data.payload };
    case "email":
      return { ...state, [action.data.key]: action.data.payload };
    case "university":
      return { ...state, [action.data.key]: action.data.payload };
    case "phone":
      return { ...state, [action.data.key]: action.data.payload };
    case "country":
      return { ...state, [action.data.key]: action.data.payload };
    default:
      return state;
  }
};

function Reducer() {
  const [form, dispatch] = useReducer(reducer, initialState);
  const onChangeHandler = (e) => {
    const params = {
      data: {
        key: e.target.name,
        payload: e.target.value,
      },
      type: e.target.name,
    };
    dispatch(params);
  };
  return (
    <>
      <Title>useReducer Hook</Title>
      <Row flex="row">
        <Section>
          <Title>Form Data</Title>
          <Input
            placeholder="Firstname"
            name="firstname"
            onChange={onChangeHandler}
          />
          <Input
            placeholder="Lastname"
            name="lastname"
            onChange={onChangeHandler}
          />
          <Input placeholder="Age" name="age" onChange={onChangeHandler} />
          <Input placeholder="Email" name="email" onChange={onChangeHandler} />
          <Input
            placeholder="University"
            name="university"
            onChange={onChangeHandler}
          />
          <Input
            placeholder="Phone"
            type="Phone"
            name="phone"
            onChange={onChangeHandler}
          />
          <Input
            placeholder="Country"
            name="country"
            onChange={onChangeHandler}
          />
        </Section>
        <Section>
          <Title>Form Details</Title>
          <List>
            {Object.keys(form).map((formField) => (
              <ListItems>{`${formField}: ${form[formField]}`}</ListItems>
            ))}
          </List>
        </Section>
      </Row>
    </>
  );
}

export default Reducer;
