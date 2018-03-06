import React from 'react'
import injectSheet from 'react-jss'
import ReactMarkdown  from 'react-markdown'


const style = {
    caption: {
        height: 25,
        cursor:'pointer',
        height: 30,
        fontSize: '1.3em',
        textAlign: 'center',
        color: '#fff',
        lineHeight: '30px',
        backgroundColor: '#1565e5',
        backgroundImage: 'linear-gradient(to bottom, #3cb0fd, #3498db)',
        marginBottom: 1
    },
    content:{
        transition: 'font-size 0.25s ease-in-out',
        padding: '10px 50px',
        backgroundColor: '#d9feff',
    },
    forShow:{
        fontSize:'1.1em',
        padding:5,
     },
    forHide:{
        overflow:'hidden',
        fontSize:0,
        padding:0,
    }
}



class AccordItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            md: null,
            isActive: false
        }
    }

    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    showText = (idx, cb) => {
        if (this.state.md) {
            this.setState({ isActive: true });
            cb(idx);
        }
        else {
            this.getMD(idx, cb);
        }
    }


    hideText = (idx) => {
        this.setState({ isActive: false });
    }

    getMD =(idx, cb)=>{
        let mduri =require(`./${this.props.name}.md`);
        fetch(mduri)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({md:text, isActive: true});
            cb(idx);
          })
      }

    render() {
        const { classes, idx, name, caption, onItemClick } = this.props;
        const { isActive,md } = this.state;
        const optioncls =  isActive ? classes.forShow: classes.forHide;
        const cls =`${classes.content} ${optioncls}`
    
        return (
            <div>
                <div onClick={(e) => onItemClick(idx)}
                     className={classes.caption}>
                    {caption}
                </div>

                <div className={cls} >
                   <ReactMarkdown source={md} /> 
                </div>
            </div>
        )
    }
}

export default injectSheet(style)(AccordItem);