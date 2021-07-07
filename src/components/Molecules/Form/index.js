import { Container } from "./styles"
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const Form = ({ schema, children, onSubmit }) => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child.props.name
        ? React.createElement(child.type, {
          ...{
            ...child.props,
            register,
            name: child.props.name,
            key: child.props.name,
            err: errors
          }
        })
        : child;
      })}
    </Container>
  );
}

export default Form;