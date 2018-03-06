import React from 'react'
import injectSheet from 'react-jss'
import AccordItem from './accord_item'

const style = {
    caption: {
        height: 25,
        cursor:'pointer'
    }
}

class Accordion extends React.Component{
    constructor(props) {
        super(props);
        this.itemRefs=[];
        this.state = { ActiveItemIdx: null }
    }

    onItemClick = (itemIdx) => {
        const { ActiveItemIdx } = this.state;

        if (ActiveItemIdx === null) {
            this.itemRefs[itemIdx].showText(itemIdx, this.setActiveItem);
        } else if (ActiveItemIdx !== null && ActiveItemIdx !== itemIdx) {
            this.itemRefs[ActiveItemIdx].hideText(itemIdx);
            this.itemRefs[itemIdx].showText(itemIdx, this.setActiveItem);
        } else if (ActiveItemIdx !== null && ActiveItemIdx === itemIdx) {
            this.itemRefs[ActiveItemIdx].hideText(itemIdx);
            this.setState({ActiveItemIdx:null})
        }
    }

    setActiveItem = (idx) => {//callback для установки индекса активного item'a
        this.setState({ActiveItemIdx:idx})
    }


    render() {
        const { data } = this.props;
        return (
            data.map((el, idx) => {
                return (
                    <div>
                        <AccordItem
                            onRef={ref => (this.itemRefs[idx] = ref)}
                            idx={idx}
                            name={el.name}
                            caption={el.caption}
                            onItemClick={this.onItemClick} />
                    </div>
                )
            })
        )
    }
}

export default injectSheet(style)(Accordion);