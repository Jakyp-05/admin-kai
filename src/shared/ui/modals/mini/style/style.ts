import { Box ,Dialog, DialogTitle, DialogContent, DialogActions, Button, styled } from '@mui/material';



// Styled components using @mui/system
export const StyledDialog = styled(Dialog)({
    '& .MuiPaper-root': {
      // padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#f5f5f5',
      width : '90%',
      maxWidth: '474px',
      height: '90%',
      maxHeight: '403px',
      paddingBottom : '50px',
      
    },
    '& .MuiPaper-root-MuiDialog-paper' : {
      overflow : 'hidden',
    },
    '& .MuiDialogContent-root' : {
      overflow:'hidden',
    }

  });
  
  export const StyledDialogTitle = styled(DialogTitle)({
    fontSize: '20px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
    display: 'block',
    width: '100%',
    height: '92px',
    background:'rgba(54, 203, 255, 1)',
    borderRadius:'10px',
    textAlign: 'center',
    fontFamily:'Montserrat , sans-serif',
   
  });
  
  export const StyledDialogContent = styled(DialogContent)({
    fontSize: '16px',
    color: '#555',
  });
  
  export const StyledDialogActions = styled(DialogActions)({
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    alignItems:'center',
    
  });
  
  export const StyledBtnClose = styled(Button)({
    padding:'5px 10px',
    width:'124px',
    height:'30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap: '10px',
    color: '#fff',
    background:'rgba(131, 131, 131, 1)',
    fontSize: '15px',
    fontWeight: '500',
    borderRadius:'7px',
fontFamily:'san-serif , Montserrat',
"&:hover": {
      background: 'rgba(131, 131, 131, 1.4)',
      boxShadow: '0px 0px 30px 0px rgba(131, 131, 131, 0.7)',
  
    },
  });
  export const StyledBtnOk = styled(Button)({
    padding:'5px 10px',
    width:'149px',
    height:'30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap: '10px',
    color: '#fff',
    background:' rgba(54, 203, 255, 1)',
    fontSize: '15px',
    fontWeight: '500',
    borderRadius:'7px',
    fontFamily:'san-serif , Montserrat',
    "&:hover": {
      background: 'rgba(41, 185, 235, 1)',
      boxShadow: '0px 0px 30px 0px rgba(128, 222, 255, 1)',
  
    },

  });

  // export const ButtonBlock = styled(Box)({
    

  // });
