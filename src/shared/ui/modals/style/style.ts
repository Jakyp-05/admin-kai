import { Box ,Dialog, DialogTitle, DialogContent, DialogActions, Button, styled } from '@mui/material';



// Styled components using @mui/system
export const StyledDialog = styled(Dialog)({
    '& .MuiPaper-root': {
      // padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#f5f5f5',
      width : '90%',
      maxWidth: '710px',
      height: '90%',
      maxHeight: '742px',
      paddingBottom : '20px',
      
     
    },
  });
  
  export const StyledDialogTitle = styled(DialogTitle)({
    fontSize: '35px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
    display: 'block',
    width: '100%',
    height: '83px',
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
    justifyContent: 'flex-end',
    gap: '5px',
    paddingRight : '35px',
  });
  
  export const StyledBtnClose = styled(Button)({
    width:'148px',
    height:'43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap: '10px',
    color: '#fff',
    background:'rgba(131, 131, 131, 1)',
    fontSize: '16px',
    fontWeight: '500',
fontFamily:'san-serif , Montserrat',
"&:hover": {
      background: 'rgba(131, 131, 131, 1.4)',
      boxShadow: '0px 0px 30px 0px rgba(131, 131, 131, 0.7)',
  
    },
  });
  export const StyledBtnOk = styled(Button)({
    width:'174px',
    height:'43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    gap: '10px',
    color: '#fff',
    background:' rgba(54, 203, 255, 1)',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily:'san-serif , Montserrat',
    "&:hover": {
      background: 'rgba(41, 185, 235, 1)',
      boxShadow: '0px 0px 30px 0px rgba(128, 222, 255, 1)',
  
    },

  });

  // export const ButtonBlock = styled(Box)({
    

  // });
