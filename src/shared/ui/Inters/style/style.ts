import { styled } from '@mui/system';
import { Box, Button as MuiButton, Typography, Table as MuiTable, TableBody as MuiTableBody, TableCell as MuiTableCell, TableHead as MuiTableHead, TableRow as MuiTableRow, InputBase } from '@mui/material';

export const Container = styled("div")(({theme}) => ({
  width: '100%',
  minHeight: '86vh',
  backgroundColor: '#fff',
  borderRadius: '3px',
  padding: '30px 0',
}))

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bbb;
`;

export const BackButton = styled("p")`
  font-size: 24px;
  font-weight: 500;
  color: #333350;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 39px;
`;



export const ButtonAdd = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 gap: "5px",
  width: "166px",
  height: "46px",
  background: "#36CBFF",
  "&:hover": {
    background: 'rgba(41, 185, 235, 1)',
    boxShadow: '0px 0px 30px 0px rgba(128, 222, 255, 1)',

  },
  fontWeight: 600,
  fontSize: "16px",
  color: "#FCFCFC",
  borderRadius: "7px",
  fontFamily:'sans-serif , Montserrat'

});

export const ButtonSave = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 166px;
  height: 46px;
  background: green;
  border-radius: 7px;
  font-weight: 600;
  font-size: 16px;
  color: #fcfcfc;
  cursor: pointer;

  &:hover {
    background: rgba(41, 185, 235, 1);
    box-shadow: 0px 0px 30px 0px rgba(128, 222, 255, 1);
  }
`;

export const StudentInfo = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 20px 0;

  h5 {
    font-family: 'sans-serif, Montserrat';
    font-size: 20px;
    font-weight: 500;
    color: rgba(51, 51, 80, 1);
    text-align: center;
  }

  p {
    color: rgba(95, 95, 95, 1);
    font-family: 'sans-serif, Montserrat';
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`;

export const Image = styled('img')`
  width: 114px;
  height: 114px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const TableContainer = styled("div")({
  width: '100%',
  marginTop: '20px',
})


export const Table = styled("table")`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled("thead")`
  border-bottom: 1px solid #bbb;
  border-top: 1px solid rgba(39, 49, 56, 0.51);
  height: 53px;
`;

export const TableBody = styled("tbody")``;

export const TableRow = styled("tr")`
  text-align: center;
  
`;

export const TableHeader = styled("th")`
  padding: 10px;
  font-weight: bold;
`;

export const TableCell = styled("td")`
  padding: 10px;
  color: rgba(0, 0, 255, 1);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border-bottom: none;
`;

export const StatusCell = styled(TableCell)<{ status: string }>`
  color: ${(props) =>
    props.status === 'Linked to project'
      ? 'blue'
      : props.status === 'Adaptation'
      ? 'orange'
      : props.status === 'Evaluated'
      ? 'green'
      : props.status === 'Interview'
      ? 'purple'
      : props.status === 'Employed'
      ? 'rgba(108, 255, 105, 1)'
      : 'black'
    };
  font-weight: 400;
  font-size: 18px;
  font-family: 'sans-serif , Montserrat';
`;

export const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  padding: 20px; 
  background-color: #f9f9f9; 
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  max-width: 600px; 
  margin: 0 auto; 
`;

export const Label = styled('label')`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled(InputBase)`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled('select')`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled(MuiButton)`
  display: block;
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;
