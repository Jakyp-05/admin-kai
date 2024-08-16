// import React from 'react';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { styled } from '@mui/material';
// import CalendarIcon from '../../../../shared/assets/svg/dateIcon.svg';
// import 'dayjs/locale/ru'; // Импортируйте локализацию для dayjs
// import dayjs, { Dayjs } from 'dayjs';

// export const Label = styled('label')`
//   display: block;
//   color: rgba(51, 51, 80, 1);
//   font-size: 15px;
//   font-weight: 500;
//   font-family: 'sans-serif, Montserrat';
// `;

// export const Localization = styled('div')`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// export const DateBlock = styled('div')`
//    display: flex;
//     align-items: center;
//     background-color: rgba(151, 153, 154, 0.08);
//     border: 1px solid rgba(39, 49, 56, 0.51);
//     position: relative;

//     img {
//       position: absolute;
//       top: 0;
//       right: 10px;
//     }
// `;

// const StyledTextField = styled(TextField)`
//   & .MuiInputBase-root {
//     font-size: 14px;
//     color: rgba(142, 140, 140, 1);
//     background-color: inherit;
//     border-radius: 8px;
//     font-family: Montserrat, sans-serif;
//   }

//   & .MuiInputLabel-root {
//     font-size: 14px;
//     color: #888;
//   }

//   & .MuiOutlinedInput-root {
//     &.Mui-focused fieldset {
//       border-color: #4fc3f7;
//     }
//   }
// `;



// export interface DatePickerFieldProps extends Omit<DatePickerProps<Dayjs>, 'renderInput'> {
//   label: string;
// }

// const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, value, onChange, ...props }) => (
//   <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
//     <Localization>
//       <Label>{label}</Label>
//       <DatePicker
//         value={value}
//         onChange={onChange}
//         {...props}
//         slots={{
//           openPickerIcon: () => <img src={CalendarIcon} alt="calendar icon" />,
//           textField: StyledTextField,
//         }}
//       />
//     </Localization>
//   </LocalizationProvider>
// );

// export default DatePickerField;

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled, TextField } from '@mui/material';
import CalendarIcon from '../../../../shared/assets/svg/dateIcon.svg';
import 'dayjs/locale/ru'; 
import './CalendarStyle.css'

interface LabelTypes {
  labelStart: string;
  labelEnd: string;
  value: Dayjs | null;
  setValue: (value: Dayjs | null) => void;
};

export const Label = styled('label')`
  color: rgba(51, 51, 80, 1);
  font-size: 15px;
  font-weight: 500;
  font-family: ' Montserrat';
`;

export const Localization = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
& .MuiStack-root{
overflow:hidden;
}`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    font-size: 14px;
    color: rgba(142, 140, 140, 1);
    background-color: inherit;
    border-radius: 8px;
    font-family: Montserrat, sans-serif;
  }

  & .MuiInputLabel-root {
    font-size: 14px;
    color: #888;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #4fc3f7;
    }
  }
`;

const StyleDatePicker = styled(DatePicker)`
 
  
 
`;
const DemoContainerStyle = styled(DemoContainer)`
   & .MuiStack-root css-10o2lyd-MuiStack-root {
    overflow: hidden;
    border-color: #4fc3f7;
    
`

const DatePickerField: React.FC<LabelTypes> = ({labelStart, labelEnd , value , setValue}) => {
    
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
      <DemoContainerStyle  components={['DatePicker', 'DatePicker']}>
        <Localization>
          <Label >{labelStart}</Label>
        <StyleDatePicker
         label="" 
         defaultValue={dayjs('2022-04-17')}
         orientation='portrait'

         slots={{
                    openPickerIcon: () => <img src={CalendarIcon} alt="calendar icon" />,
                    textField: StyledTextField,
                  }} 
         />
        </Localization>
        <Localization>
        <Label>{labelEnd}</Label>

          <StyleDatePicker
          label=""
          value={value}
          onChange={(newValue) => setValue(newValue)}
          orientation='portrait'
          slots={{
            openPickerIcon: () => <img src={CalendarIcon} alt="calendar icon" />,
            textField: StyledTextField,
          }} 
          />

        </Localization>
        
        
      </DemoContainerStyle>
    </LocalizationProvider>

    );
}

export default DatePickerField;




