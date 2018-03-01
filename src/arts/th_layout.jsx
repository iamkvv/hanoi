import React from 'react'
import injectSheet from 'react-jss'
import PegPanel from './th_pegpanel'

const pegstyle = {
    numpeg: {
        textAlign: 'center',
        gridRow: '2/2',
        gridColumn: props => props.num,
        color: 'blue',
        border: '1px solid blue',
        borderRadius: 20,
        height: 20,
        width: 20,
        fontSize: 14,
    lineHeight: '20px',
    //justifySelf: 'center',
    alignSelf: 'center',


    }
}
const Numpeg = ({ classes, children }) => {//выводит номера стержней
    return (
        <div className={classes.numpeg}>{children}</div>
    )
}
const NumPeg = injectSheet(pegstyle)(Numpeg);

const THLayout = ({ classes, children, onpanelclick }) => {
    return (
        <div className={classes.towergrid}>
            {[1, 2, 3].map(n => {
                return (
                    <React.Fragment>
                        <NumPeg num={n}>{n}</NumPeg>
                        <PegPanel id={n} onpanelclick={onpanelclick} style={{ gridArea: `3 / ${n} / 11 / ${n + 1}` }} />
                    </React.Fragment>
                )
            })}
            <p className={classes.instruct}>
                Переместите пирамиду на 2-й стержень. Больший диск нельзя класть на меньший.
            </p>
            {children}
        </div>
    )
}
const style = { // основная раскладка
    towergrid: {
        display: 'grid',
        position: 'relative',
        alignContent: 'end',
        justifyItems: 'center',
        gridAutoFlow: 'column',
        //gridTemplateColumns: 'repeat(3,1fr) minmax(180px, 1fr)',
        //gridTemplateRows: props => ("0px 25px 70px  repeat(" + props.rowcount + ",25px)" + " 55px"),
        '@media  (min-width:600px)':{
            gridTemplateRows: "20px 25px 70px  repeat(7,25px) 55px",
            gridTemplateColumns: 'repeat(3,1fr) minmax(170px, 1fr)'
        },
        '@media  (max-width:600px)':{
            gridTemplateRows: "80px 25px 70px  repeat(7,25px) 55px",
            gridTemplateColumns: 'repeat(3,1fr)'
        },

        gridGap: '2px 10px',
        backgroundColor: '#f5f5f5',
        padding: 20,
        width: 'auto',
        minWidth:500,
        color: 'white'
    },
    instruct:{
        borderTop: '1px solid silver',
        alignSelf: 'stretch',
        paddingTop: 10,
        color: 'green',
        fontSize: 16,
        gridArea: '11 / 1 / 12 / 6'
    }
}

const styledLayout = injectSheet(style);
export default styledLayout(THLayout);


