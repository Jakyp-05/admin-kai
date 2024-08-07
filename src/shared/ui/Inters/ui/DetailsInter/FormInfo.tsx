import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { InputField } from '../InputAndSelect/Input';
import { SelectField } from '../InputAndSelect/Select';

interface FormIntersAddProps {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

const FormModalStyle = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 66px;
  grid-row-gap: 0px;
  opacity: 1;
`;

const ErrorMessage = styled.div`
  color: red;
  paddingLeft: 10px;
   width: 287px;
`
const FormIntersAdd: React.FC<FormIntersAddProps> = ({ errors, touched }) => (
  <FormModalStyle>
    <Field
      name="firstName"
      as={InputField}
      label="Имя*"
      error={errors.firstName && touched.firstName ?
     <ErrorMessage>{errors.firstName}</ErrorMessage> : null}
    />
    <Field
      name="lastName"
      as={InputField}
      label="Фамилия*"
      error={errors.lastName && touched.lastName ? <ErrorMessage>{errors.lastName}</ErrorMessage> : null}
    />
    <Field
      name="email"
      as={InputField}
      label="Email"
      error={errors.email && touched.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
    />
    <Field
      name="phone"
      as={InputField}
      label="Телефон"
      error={errors.phone && touched.phone ? <ErrorMessage>{errors.phone}</ErrorMessage> : null}
    />
    <Field name="direction">
      {({ field }: any) => (
        <SelectField
          label="Направление"
          options={[
            { value: 'frontend', label: 'Frontend' },
            { value: 'backend', label: 'Backend' },
            { value: 'fullstack', label: 'Fullstack' },
          ]}
          {...field}
          error={errors.direction && touched.direction ? <ErrorMessage>{errors.direction}</ErrorMessage> : null}
        />
      )}
    </Field>
    <Field name="status">
      {({ field }: any) => (
        <SelectField
          label="Статус"
          options={[
            { value: 'active', label: 'Активен' },
            { value: 'inactive', label: 'Неактивен' },
          ]}
          {...field}
          error={errors.status && touched.status ? <ErrorMessage>{errors.status}</ErrorMessage> : null}
        />
      )}
    </Field>
  </FormModalStyle>
);

export default FormIntersAdd;
