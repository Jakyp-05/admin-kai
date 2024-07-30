import { styled } from "@mui/material";
import { fontWeight, padding, positions } from "@mui/system";

export const Header = styled("div")(({ theme }) => ({
    display:'flex',
    alignItems:"center",
    justifyContent:'space-between',
    background:'#FFFFFF',
    height:'87px',
    padding:'0 20px ',
    

    p:{
        fontSize:'24px',
        fontWeight:600
    }
}));

export const HeaderLogos = styled('div')(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    
}))

export const HeaderIconsDiv = styled('div')(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'40px',
    
}))

export const HeaderIconSearch = styled('div')(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'15px',
    
}))


export const HeaderSearch = styled('div')(({theme}) => ({
    width: '325px',
    height: '42px'  ,
    backgroundColor: '#FFFFFF',
    border: '1px solid #919191',
    borderRadius: '5px',
    position:'relative',
    display: 'flex',
    alignItems:'center',
   
     input:{
        background: 'transparent',
        border:'none',
        outline:'none',
        fontSize:'18px',
        padding:'10px 20px',
        width:'300px',
        fontWeight:400,
     },
     img:{
        position:'absolute',
        top: '10',
        right: '13px',
        
     }
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