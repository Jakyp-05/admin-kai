  import React from 'react';
  import { useForm, Controller } from 'react-hook-form';
  import styled from 'styled-components';
  import { InputField } from "../Input";
  import { SelectField } from "../Select";
  import {Option} from '../modalInters/TypesModal';
  import { Label, SelectFieldLevel } from '../../selectModal/SelectLevels';

  export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    direction: string;
    status: string;
    project:string;
    level1:string;
    level2:string;
    
  }

  interface FormIntersProps {
    onSubmit: (data: FormData) => void;
  }

  const FormModalStyle = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 66px;
    grid-row-gap: 0px;
    opacity: 1;
  `;

 export const SelectDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

 export const LevelSelectContainer  = styled.div`
  
    display: flex;
    align-items: start;
    flex-direction: column;
    
  `;



  const FormIntersEdit: React.FC<FormIntersProps> = ({ onSubmit }) => {
    const { control, handleSubmit, reset } = useForm<FormData>({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        direction: '',
        status: '',
        
      },
    });

    const handleFormSubmit = (data: FormData) => {
      onSubmit(data);
      reset(); // Reset form after submission
    };

    return (
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormModalStyle>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <InputField  label="Имя*" {...field} />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <InputField label="Фамилия*" {...field} />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField label="Email*" {...field} />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputField label="Телефон*" {...field} />
            )}
          />
          <Controller
            name="direction"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Направление*"
                {...field}
                options={[
                  { value: 'frontend', label: 'Frontend' },
                  { value: 'backend', label: 'Backend' },
                  { value: 'fullstack', label: 'Fullstack' },
                ]}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Статус*"
                {...field}
                options={[
                  { value: 'adaptation', label: 'Adaptation' },
                  { value: 'evaluated', label: 'Evaluated' },
                  { value: 'linked', label: 'Linked to project' },
                  { value: 'interview', label: 'Interview' },
                  { value: 'employed', label: 'Employed' },
                ]}
              />
            )}
          />
          <Controller
            name="project"
            control={control}
            render={({ field }) => (
              <SelectField
                label="Проекты*"
                {...field}
              
                options={[
                  { value: 'computer', label: 'Computer' },
                  { value: 'store', label: 'store' },
                  {value: 'ai-lms' , label:'AI-LMS'},
                  { value: 'safe-cliic', label:'Safe-Clinic'}
                ]}
              />
            )}
          />
          <LevelSelectContainer>
          <Label >Уровень *</Label>
          
            <SelectDiv>
            <Controller
              name="level1"
              control={control}
              render={({ field }) => (
                <SelectFieldLevel
                  label="Уровень *"
                  {...field}
                  options={[
                    { value: 'D1', label: 'D1' },
                    { value: 'D2', label: 'D2' },
                    { value: 'D3', label: 'D3' },
                  ]}
                />
              )}
            />

            <Controller
              name="level2"
              control={control}
              render={({ field }) => (
                <SelectFieldLevel
                  label=" "
                  {...field}
                  options={[
                    { value: '90', label: '90' },
                    { value: '91', label: '91' },
                    { value: '92', label: '92' },
                  ]}
                />
              )}
            />
            </SelectDiv>
          </LevelSelectContainer>
        </FormModalStyle>
        {/* <button type="submit">Submit</button> */}
      </form>
    );
  };

  export default FormIntersEdit;
