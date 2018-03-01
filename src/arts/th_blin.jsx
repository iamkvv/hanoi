import React from 'react'
import injectSheet from 'react-jss'

const Blin = ({ classes, children, style }) => {
    return (
        <div style={style} className={classes.blin}>
            {children}
        </div>
    )
}

const style = {
    blin: {
        backgroundColor: props=> props.bcolor,
        width: props=> props.bwidth,
        borderRadius: 5,
        height: 25,
        textAlign: 'center',
        zIndex: 2,
        pointerEvents:'none'
    }
}

export default injectSheet(style)(Blin);