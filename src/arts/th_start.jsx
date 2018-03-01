import React from 'react'
import injectSheet from 'react-jss'

const style = {
    btncontainer: {
        '@media  (min-width:600px)':{
            width:150,
            margin: '15px auto 0px auto',
            borderTop: '1px solid silver',
            paddingTop: 10,
         },
         '@media  (max-width:600px)':{
            marginTop: '10px',
            '& > button':{
                display:'block',
                marginBottom:'9px'
            }
         },

    
    '& > button':{
        width: 67,
        marginRight: 8,
        backgroundImage: 'linear-gradient(to bottom, #82c4f2, #0a5be4)',
        borderRadius: 28,
        color: '#ffffff',
        fontSize: 12,
        letterSpacing: '1px',
        padding: '0px 8px 2px 8px',
        border: '1px solid silver',
        cursor: 'pointer'
    },
    '& > button:hover':{
        background: '#3cb0fd',
        backgroundImage: 'linear-gradient(to bottom, #3cb0fd, #3498db)'
    },
    '& > button:disabled':{
        cursor: 'default',
        color:'lightgray'
    },

}}

const Start = ({ classes, onStart,onRestart }) => (
    <div className={classes.btncontainer}>
        <button onClick={onStart} >
            Старт
        </button>
        <button onClick={onRestart}>
            Стоп
        </button>
    </div>
)
export default injectSheet(style)(Start);