import React, { useState, useEffect } from "react";
import { Form, Input, Scope } from "unform";
import Doca from "../Doca";
import * as Yup from "yup";
import api from "../../services/api";
import "./styles.css";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string(),
  address: Yup.object({
    street: Yup.string(),
    number: Yup.number()
  })
});

export default function PostForm({ match }) {
  const [data, setData] = useState({});

  async function handleSubmit(data) {
    await api.postOrPut("/posts", match.params.id, data);
  }

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/posts/${id}`);

      setData(response.data);
    }

    if (match.params.id) {
      loadData();
    }
  }, [match.params, match.params.id]);

  return (
    <>
      <Doca />
      <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
        <Input name="name" label="Nome" />
        <Input name="email" label="E-mail" />

        <Scope name="address" path="address">
          <Input name="street" label="Rua" />
          <Input name="number" label="Número" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </>
  );
}
