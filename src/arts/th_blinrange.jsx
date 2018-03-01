//----- меню - ввод кол-ва блинов -------//
import React from 'react'
import injectSheet from 'react-jss'

const blrangestyle = {
    bllabel: {
        marginBottom: 2,
        letterSpacing: 1
    },
    rangewrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: 150,
        margin: '5px auto',
        padding: '0 5px'
    },
    blcounts: {
        display: 'flex',
        flexDirection: 'row',
        width:175,
        '& div': {
            fontSize: '9px',
            width: 38,
            textAlign: 'left'
        }
    },
    inputcounts: {
        width:150,
        margin: 0,
        padding: 0
    }
}

const BlinRange = ({classes, blinCount, onChangeCount, isStarted}) => {
    return (
        //  <React.Fragment>
        <div>
            {/* <div className={classes.bllabel}>
                Количество дисков:
            </div> */}
            <div className={classes.rangewrapper}>
                <div className={classes.bllabel}>
                    Количество дисков:
                 </div>


                <div>
                    <input disabled={isStarted} className={classes.inputcounts} type='range' onChange={onChangeCount} value={blinCount} min={3} max={7} />
                </div>
                <div>
                    <div className={classes.blcounts}>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                    </div>
                </div>
            </div>
        </div>
         // </React.Fragment>
    )
}

export default injectSheet(blrangestyle)(BlinRange)