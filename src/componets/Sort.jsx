import React from 'react'
import Vector from '../shared/assets/svg/Vector.svg'
import { styled } from '@mui/system';

export const sortList = [
    { language: 'Java Script' },
    { language: 'Flutter' },
    { language: 'Java' },
    { language: 'Python' },

]

const ButtonVector = styled('button')({
    display: "flex",            
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    gap: '10px',
    width: '184px',
    height: '49px',
    background: '#36CBFF',
    fontWeight: 600,
    fontSize: '20px',
    color: '#FCFCFC',
    borderRadius: '4px'

})

const UL = styled('ul')({
    position:'relative',
    ul: {
        width:'184px',
        height: '100px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: '',
        justifyContent:'center',
        padding: '5px ',
        position:"absolute",
        boxShadow: '1px 4px 8px 0px rgba(34, 60, 80, 0.2)',

        li:{
            text:'18px',
            fontWeight:500
        }
    }

})

const Sort = () => {
    const sortRef = React.useRef()
    const [open, setOpen] = React.useState(false);

    const onClickFilter = () => {
        setOpen(false)
    }

    // React.useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if(event.composedPath && !event.composedPath().includes(sortRef.current)){
    //       setOpen(false)
    //       // console.log('click outside');
    //     }
    //   }
    //   document.body.addEventListener('click' , handleClickOutside)
       
    //   return () => {
    //     // console.log('sort unmout');
    //     document.body.removeEventListener('click', handleClickOutside)
    //   }
    // },[])

    return (
        <div>
            <ButtonVector
                onClick={() => setOpen(!open)}>
                Фильтер <img src={Vector} alt="" />
            </ButtonVector>
            {
                open && (
                    <UL>
                        <ul>
                            {sortList.map((obj, i) => (
                                <li
                                    key={i}
                                    onClick={() => onClickFilter(obj)}
                                >
                                    {obj.language}
                                </li>
                            ))}
                        </ul>
                    </UL>
                )
            }
        </div>
    )
}

export default Sort
