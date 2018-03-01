import React from 'react'
import injectSheet from 'react-jss'

const style = {
    modecontainer: {
        '@media  (min-width:600px)':{
            width: 150,
            margin: '15px auto 0px auto',
            borderTop: '1px solid silver',
            paddingTop: 10,
            '& label input': {
                margin: '2px 2px',
                cursor: 'pointer'
            },
            '& label': {
                cursor: 'pointer',
                marginRight:10
            },
            '& label div': {
                display:'inline-block',
                marginRight:10
            }
         },
         '@media  (max-width:600px)':{
            width: 'auto',
            margin: '6px 16px',
            '& label': {
                display:'block',
                cursor: 'pointer'
            },
            '& label  input': {
                margin: '3px 3px 3px 0'
            },
            '& label div':{
                display:'inline-block',
                width:'55px'
            }

         },



    
        '& > label > input:before': {
            content: '""',
            width: 12,
            height: 12,
            display: 'block',
            zIndex: 0,
            borderRadius: 20,
            position: 'relative',
        },
        '& > label > input:hover:before': {
            border: '2px solid blue',
            opacity: 0.5,
            top: -2,
            left: -2,
        }
    }
}

const Modes = ({ classes, data, onChange, mode, isStarted }) => (
    <div className={classes.modecontainer}>
        <div style={{letterSpacing:'1px'}}>Режим:</div>
        {data.map((el) => {
            return (
                <label>
                    <div style={{}}>
                        {el.label}
                    </div>
                    <input disabled = {isStarted}
                        onChange={onChange}
                        checked={el.value === mode}
                        type='radio'
                        value={el.value} />
                </label>
            )
        })
        }
    </div>
)




export default injectSheet(style)(Modes)