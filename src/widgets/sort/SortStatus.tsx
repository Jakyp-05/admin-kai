import { styled } from '@mui/material';
import React, { useState } from 'react';
import { TableCell } from 'shared/ui/Inters/style/style';
import vectorOption from "../../shared/assets/svg/vectorOption.svg";

interface StatusCellProps {
  status: string;
}

interface StatusCellProps {
    status: string;
  }
  
  interface SortStatusProps {
    row: { status: string };
    index: number;
    data: { status: string }[];
  }

const SortStatus:React.FC<SortStatusProps> = ({ row, index, data }) => {
  const [dropdownOpen, setDropdownOpen] = useState<null | number>(null);

  const handleDropdownToggle = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    data[index].status = newStatus;
    setDropdownOpen(null);
  };

  return (
    <StatusCell
      status={row?.status}
      onMouseEnter={() => handleDropdownToggle(index)}
      onMouseLeave={() => setDropdownOpen(null)}
    >
      {row.status}
      <img src={vectorOption} alt="vectorOption" />
      <Dropdown className={dropdownOpen === index ? 'show' : ''}>
        {['Adaptation', 'Evaluated', 'Linked to project', 'Interview', 'Employed'].map((status) => (
          <DropdownItem key={status} status={status} onClick={() => handleStatusChange(index, status)}>{status}</DropdownItem>
        ))}
      </Dropdown>
    </StatusCell>
  );
};

export default SortStatus;

const StatusCell = styled(TableCell)<StatusCellProps>(({ status }) => ({
  color: status === 'Adaptation' ? 'red' :
         status === 'Evaluated' ? 'orange' :
         status === 'Linked to project' ? 'lightblue' :
         status === 'Interview' ? 'blue' :
         status === 'Employed' ? 'green' : 'black',
  borderBottom: 'none',
  background: 'rgba(239, 255, 237, 1)',
  width: '238px',
  height: '36px',
  paddingBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: ' 0 auto',
  textAlign: 'center',
  position: 'relative',
}));

interface DropdownItemProps {
  status: string;
}

const DropdownItem = styled( 'div')<DropdownItemProps>(({status}) => ({
  padding: '8px 12px',
  cursor: 'pointer',
  color: status === 'Adaptation' ? 'red' :
         status === 'Evaluated' ? 'orange' :
         status === 'Linked to project' ? 'cyan' :
         status === 'Interview' ? 'blue' :
         status === 'Employed' ? 'green' : 'black',
  '&:hover': {
      backgroundColor: '#f1f1f1',
  },
}))

const Dropdown = styled('div')({
  marginBottom: '50px',
  display: 'none',
  position: 'absolute',
  top: '40px',
  left: 0,
  backgroundColor: 'rgba(239, 255, 237, 1)',
  // minWidth: '150px', 
  // overflowY: 'auto', // Автоматический скролл при переполнении
  maxHeight: '200px', // Ограничение высоты выпадающего списка
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  borderRadius: '4px',
  minWidth: '238px',
  margin: '0 auto',
  height:'90vh',
  '& div': {
    padding: '8px 12px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(50,50,50,0.1)',
    },
  },
  '&.show': {
    display: 'block',
  },
});
