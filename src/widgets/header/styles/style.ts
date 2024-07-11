import { styled } from "@mui/material";

export const Header = styled("div")(({ theme }) => ({
    display:'flex',
    alignItems:"center",
    justifyContent:'space-between',
    background:'#FFFFFF',
    height:'87px',
    padding:'0 10px '
}));

export const HeaderLogos = styled('div')(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    
}))

export const INotice = styled('div')(({theme})=> ({
    a:{
        background:'#F0F0F0',
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        width:'50px',
        heigth:'50px',
        borderRadius:'50%',
        padding:'15px 25px'
    }
   
}))