import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { InputField } from '../InputAndSelect/Input';
import { SelectField } from '../InputAndSelect/Select';
import { LevelSelectContainer, SelectDiv } from '../InputAndSelect/FormInters/FormInters';
import { Label, SelectFieldLevel } from '../selectModal/SelectLevels';

interface FormIntersAddProps {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

const FormModalStyle = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 66px;
  grid-row-gap: 0;
  opacity: 1;
`;

const ErrorMessage = styled.div`
  color: red;
  padding-left: 10px;
  width: 287px;
`;

const ErrorMessageMini = styled.div`
color: red;
font-size:12px;
padding-left: 10px;
width: 100px;
`;

const FormIntersAdd: React.FC<FormIntersAddProps> = ({ errors, touched }) => (
  <FormModalStyle>
    <Field
      name="firstName"
      as={InputField}
      label="Имя*"
      error={errors.firstName && touched.firstName ? <ErrorMessage>{errors.firstName}</ErrorMessage> : null}
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
            { value: 'adaptation', label: 'Adaptation' },
            { value: 'evaluated', label: 'Evaluated' },
            { value: 'linked', label: 'Linked to project' },
            { value: 'interview', label: 'Interview' },
            { value: 'employed', label: 'Employed' },
          ]}
          {...field}
          error={errors.status && touched.status ? <ErrorMessage>{errors.status}</ErrorMessage> : null}
        />
      )}
    </Field>

    <Field name="project">
      {({ field }: any) => (
        <SelectField
          label="Проекты*"
          {...field}
          options={[
            { value: 'computer', label: 'Computer' },
            { value: 'store', label: 'Store' },
            { value: 'ai-lms', label: 'AI-LMS' },
            { value: 'safe-cliic', label: 'Safe-Clinic' },
          ]}
          error={errors.project && touched.project ? <ErrorMessage>{errors.project}</ErrorMessage> : null}
        />
      )}
    </Field>

    <LevelSelectContainer>
      <Label>Уровень *</Label>
      <SelectDiv>
        <Field name="level1">
          {({ field }: any) => (
            <SelectFieldLevel
              label="Уровень *"
              {...field}
              options={[
                { value: 'D1', label: 'D1' },
                { value: 'D2', label: 'D2' },
                { value: 'D3', label: 'D3' },
              ]}
              error={errors.level1 && touched.level1 ? <ErrorMessageMini>{errors.status}</ErrorMessageMini> : null}
            />
          )}
        </Field>
        <Field name="level2">
          {({ field }: any) => (
            <SelectFieldLevel
              label=" "
              {...field}
              options={[
                { value: '90', label: '90' },
                { value: '91', label: '91' },
                { value: '92', label: '92' },
              ]}
              error={errors.level2 && touched.level2 ? <ErrorMessageMini>{errors.status}</ErrorMessageMini> : null}

            />
          )}
        </Field>
      </SelectDiv>
    </LevelSelectContainer>
  </FormModalStyle>
);

export default FormIntersAdd;
