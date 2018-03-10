import React from 'react'
import injectSheet from 'react-jss'

const style = {
    infocontainer: {
        color:'green',
        fontWeight:'bold',
       '@media  (min-width:600px)':{
         
            width:150,
            margin: '15px auto 0px auto',
            borderTop: '1px solid silver',
            paddingTop: 10,
         },
         '@media  (max-width:600px)':{
            marginTop: '12px',
            marginLeft: '4px',
            '&  div': {
                marginBottom:7
            }
         },


    },
    win:{
       '@media  (min-width:600px)':{
        textAlign: 'center',
        fontSize: 45,
        margin: 0
    },
     '@media  (max-width:600px)':{
        fontSize: 20,
        marginTop: -7,
        textAlign: 'center'
        // marginLeft: 70,
     },
    }
}
const minsek = (t) => {
    const m = Math.floor(t / 60);
    const s = t - m * 60;
    return `Время: ${m} мин. ${s} сек.`
}

const winByMode = (m, cls) => {
    if (m === "H")
        return <p className={cls}>🏅</p>
    else
        return <p className={cls}>👌</p>
}
const Info = ({classes, isStarted, time, moves, isWin, mode}) => (
    isStarted ? 
        <div className={classes.infocontainer}>
            <div> {minsek(time)} </div>
            <div> Ходы:&nbsp;&nbsp; {moves} </div>
            {isWin ? winByMode(mode,classes.win): null}
        </div>
    :
    null
 )

export default injectSheet(style)(Info);