import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet from 'react-jss'
import ResizeObserver from 'resize-observer-polyfill'

/*
const PegPanel = ({ classes, style, children, onpanelclick, id }) => {
    return (
        <div id={id} onClick={onpanelclick} className={classes.pegpanel} style={style} >
            <div className={classes.lpan}></div>
            <div className={classes.rpan}></div>
        </div>
    )
}
*/
class PegPanel extends React.Component {
    componentDidMount() {
        this.ro.observe(ReactDOM.findDOMNode(this));
    //console.log(ReactDOM.findDOMNode(PegPanel))
    }
    
    //сделать HOC???
    ro = new ResizeObserver((entries, observer) => {
        for (const entry of entries) {
            const {left, top, width, height} = entry.contentRect;
    
            console.log('Element:', entry.target);
           // debugger;
            console.log(`Element's size: ${ width }px x ${ height }px`);
            console.log(`Element's paddings: ${ top }px ; ${ left }px`);
        }
    });
    




    render(){
        const { classes, style, children, onpanelclick, id } = this.props
        return(
            <div id={id} onClick={onpanelclick} className={classes.pegpanel} style={style} >
            <div className={classes.lpan}></div>
            <div className={classes.rpan}></div>
        </div>
        )
    }
}


const style = {
    rpan: {
        borderLeft: '2px solid #55b4fa',
        width: '50%'
    },
    lpan: {
        borderRight: '2px solid blue',
        width: '50%'
    },
    pegpanel: {
        display:'flex',
        justifyContent:'center',
        width:'100%',
        borderRadius:15,
       height: '101%',
        backgroundColor:'#e5fdff',
        zIndex: 0,
        opacity: 1,
        cursor: 'pointer',
        pointerEvents: 'auto',
        '&:hover': {
            opacity: 0.91,
            backgroundColor:'#49fefe'
        }

    }
}

export default injectSheet(style)(PegPanel); ///setAreas