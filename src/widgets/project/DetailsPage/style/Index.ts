import { styled } from "@mui/material";


export const ListFlexDirection = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  })

  export const ProjectDiv = styled('div') ({
    background:'rgba(255, 255, 255, 1)',
    padding:'30px 50px 50px 50px',
    minHeight:'758px',
    height:'100%'
  }) 

   export const TitileProject = styled('h1') ({
          fontFamily: 'Montserrat',
          fontSize: '28px',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgba(51, 51, 80, 1)',
          marginTop:'40px'

  }) 
  export const BackInfo = styled('div') ({
    display: 'flex',
    alignItems: 'center',   
    justifyContent: 'start',
    gap: '40px',
    borderBottom:'1px solid rgba(182, 183, 188, 1)',
    paddingBottom: '20px',
    p: {
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontWeight: 500,
        textAlign: 'left',
        color: 'rgba(51, 51, 80, 1)',
    },
    
  })

  export const DateBlock = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
   justifyContent:'center',
   marginTop:'10px',
  })

  export const DateStart = styled('p') ({
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 500,
    textAlign: 'center',
    color:'rgba(51, 51, 80, 1)'

  })

  export const DateEnd = styled('p') ({
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 500,
    textAlign: 'center',
    color:'rgba(255, 0, 0, 1)'

  })

  export const Participants = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent:'start',
    marginTop:'35px',
    marginBottom:'50px',
    position:'relative',
  });

  export const ParticipantsBlock = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent:'space-between',
    position:'relative',
  });

  export const ParticipantsTitle = styled('p') ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'left',
    color:'rgba(51, 51, 80, 1)'
  });

  export const ImagesBlock = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent:'space-between',
    position:'relative',
    marginLeft:'10px'    
  })
  export const Image = styled('img')<{ index: number }>`
  width: 45px;
  height: 45px;
  position: absolute;
  top: -18px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  left: ${({ index }) => index * 20}px; /* Сдвиг для наложения изображений */
  z-index: ${({ index }) => index}; /* Устанавливает z-index для правильного наложения */
`;


  export const ImageAdd = styled('img') ({
    width: '45px',
    height: '45px',
    position: 'absolute',
    top:'-8px',
    left:'255px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',

    '&:hover': {
        opacity: '0.8',
    }
  })
  export const Label = styled('label') ({
    
  })

  export const InputBlock = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '30px',
    marginTop:'40px',
    marginBottom:'45px',
  })

  export const ImageLength = styled('button') ({
    position:'absolute',
    top:'-18px',
    left:'100px',
    zIndex:'20',
    width:'45px',
    height:'45px',
    background:'rgba(153, 153, 153, 1)',
    borderRadius: '50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif , Montserrat',
    fontSize:'14px',
    fontWeight: 500,
    color:'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:active': {
        opacity: '0.9',
    }
  })
 