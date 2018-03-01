import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet from 'react-jss'
import Layout from './th_layout'
import Blin from './th_blin'
import BlinRange from './th_blinrange'
import Start from './th_start'
import Modes from './th_modes'
import Info from './th_info'
//import ResizeObserver from 'resize-observer-polyfill'


const manstyle = {
    mancontainer: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 4 / 11 / 5',
        width: '100%',
    
        padding: '5px 0px',
        border: '1px solid blue',
        borderRadius: 15,
        color: 'blue',
        fontSize: '12px',
        backgroundColor: '#ffe1e1',
        boxShadow: '3px 3px #d2c5c5',

        '@media  (min-width:600px)':{
           flexDirection: 'column',
           gridArea: '2 / 4 / 11 / 5',
        },
        '@media  (max-width:600px)':{
            flexDirection: 'row',
            gridArea: '1 / 1 / 2 / 4',
            height:65
        },

    }
}

const sevenColors = [
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'
]
const createBlins = () => {//создает массив объектов с данными блинов
    const arr = [];
    for (let i = 0; i < 7; i++) {
        var obj = Object.assign({}, {active: false, size: i, col: 1, row: i + 1, color:sevenColors[i] })
        arr.push(obj);
    }
    return arr;
}

class HTower extends React.Component {
    static defaultProps={
        allBlins:createBlins(),
        startblinCount:5
    }
      constructor(props) {
        super(props);
          this.state = {
              isStarted: false,
              time: 0,
              tid:null, //id счетчика
              moves: 0,
              mode: 'H',
              currBlinCount: props.startblinCount,
              rangedisabled: false,
              blins: props.allBlins.slice(7 - props.startblinCount).map(el => ({ ...el })), //??
              isWin: false //задача выполнена
          }
          this.onRestart = this.onRestart.bind(this);
          this.onStart = this.onStart.bind(this);
          this.onPanelClick = this.onPanelClick.bind(this);
          this.checkWin = this.checkWin.bind(this);
          this.moveDisk = this.moveDisk.bind(this);
          
    }
    n=0;
    stout=[];

// componentDidMount() {
//     this.ro.observe(ReactDOM.findDOMNode(this));
// //console.log(ReactDOM.findDOMNode(PegPanel))
// }


// ro = new ResizeObserver((entries, observer) => {
//     for (const entry of entries) {
//         const {left, top, width, height} = entry.contentRect;

//         console.log('Element:', entry.target);
//         debugger;
//         console.log(`Element's size: ${ width }px x ${ height }px`);
//         console.log(`Element's paddings: ${ top }px ; ${ left }px`);
//     // }
// });


    onStart = (e) => {
        this.setState({ isStarted: true }, () => {
            let id = setInterval(() => {
                this.setState((prevState,props)=>({tid:id, time: prevState.time + 1 }))
            }, 1000);
        })
        if(this.state.mode==="A"){
                this.solveHanoi(this.state.currBlinCount, 1, 2);
        }}

    onRestart = (e) => { //if mode == auto - stop recurs
        let cnt = this.state.currBlinCount;

        for(var i=0; i<this.stout.length;i++){
            clearTimeout( this.stout[i]);
        }
   
        this.setState({
            time: 0,
            moves: 0,
            isStarted: false,
            isWin: false,
            blins: this.props.allBlins.slice(7 - cnt).map(el => ({ ...el }))
        });

        clearInterval(this.state.tid);
        this.n=0;
    }

    componentWillUnmount() {
        clearInterval(this.state.tid);
        for (var i = 0; i < this.stout.length; i++) {
            clearTimeout(this.stout[i]);
        }
    }

    onChangeMode= (e)=>{
        this.setState({mode: e.target.value})
    }

    onChangeCount = (e) => {//изменение кол-ва блинов
        const cnt = Number(e.target.value);
        this.setState({ currBlinCount: cnt },
            () => { this.setState({ blins: this.props.allBlins.slice(7 - cnt).map(el => ({ ...el })) }) }
        )
    }

    checkWin = () => {
        const { blins, currBlinCount } = this.state;
        if (blins.filter(el => el.col === 2 && el.row != null).length === currBlinCount) {
            this.setState((prevstate, props) => ({ isWin: true }));
            clearInterval(this.state.tid); 
            ///
            for(var i=0; i<this.stout.length; i++){
                clearTimeout( this.stout[i]);
            }

        }
    }

    onPanelClick = (e) => {
        if(!this.state.isStarted ||
            this.state.isWin ||
            this.state.mode==="A") return; 

        let isMove = false; //был сделан ход
        const { blins } = this.state;
        const peg =  Number(e.target.parentElement.id);
        
        if(peg==0){
             debugger;
             return;
         }
        
        const blClone = this.state.blins.map(el => ({ ...el }));// clone blins
        const blinsOnPeg = blins.filter(el=>el.col===peg && el.row != null);
        const minsizePeg = Math.min(...blinsOnPeg.map(el => el.size));//мин размере на Peg'e
        const isActiveBlin =blins.some(el => el.active === true);
      //??  const actBlinIdx = blins.findIndex(this.IdxActiveBlin());
      const actBlinIdx = blins.findIndex((el)=>(el.active===true)) //индекс активного блина
     
        if (!blinsOnPeg.length && !isActiveBlin) {         //нет блинов на выбранном peg'e  и нет активного блина --ВЫХОД
            return
        } else if (blinsOnPeg.length > 0 && !isActiveBlin) {//есть блины на выбранном peg'e  и нет активного блина --
           
           //?? var minBlinIdx = blins.findIndex(this.IdxMinBlin(peg, minsizePeg));
            var minBlinIdx = blins.findIndex((el) => (el.col === peg && el.size === minsizePeg)); // индекс минимального блина в основном массиве 

            blClone[minBlinIdx] = { ...blClone[minBlinIdx], active: true, row: null }
        } else if (!blinsOnPeg.length && isActiveBlin) {    //нет блинов на выбранном peg'e  и Есть актив блин
            blClone[actBlinIdx] = { ...blClone[actBlinIdx], col: peg, row: 7, active: false };
            isMove = true;
        } else if (blinsOnPeg.length > 0 && isActiveBlin) { //есть блины на выбранном peg'e  и Есть актив блин
            if (minsizePeg < blClone[actBlinIdx].size) return; //если мин. размер на Peg'e больше размера активного - выход

            blClone[actBlinIdx] = { ...blClone[actBlinIdx], col: peg, active: false, row: 7 - blinsOnPeg.length };
            isMove = true;
        } else {
            alert('??')
        }

        /*
        if (!blinsOnPeg.length && !isActiveBlin) return; //нет блинов на выбранном peg'e  и нет активного блина

        if (blinsOnPeg.length > 0 && !isActiveBlin) { //есть блины на выбранном peg'e  и нет активного блина
            var minBlinIdx = blins.findIndex(this.IdxMinBlin(peg, minsizePeg));// и его индекс в основном массиве 
            blClone[minBlinIdx] = { ...blClone[minBlinIdx], active: true, row: null }
         }
        if (!blinsOnPeg.length && isActiveBlin){ //нет блинов на выбранном peg'e  и Есть актив блин
            blClone[actBlinIdx] = { ...blClone[actBlinIdx], col: peg, row: 7, active: false };
        }
        if (blinsOnPeg.length > 0 && isActiveBlin) { //есть блины на выбранном peg'e  и Есть актив блин 
            if(minsizePeg < blClone[actBlinIdx].size) return; //если мин. размер на Peg'e < размера активного - выход

            blClone[actBlinIdx] = { ...blClone[actBlinIdx], col: peg, active: false, row: 7 - blinsOnPeg.length };
        }
        */
        if (isMove) {
            this.setState((prevstate, props) => ({ blins: blClone, moves: prevstate.moves + 1 }));
            setTimeout(() => {
                this.checkWin()
            }, 0);

        }
        else
            this.setState({ blins: blClone })
    }
 ////////////////////
    newArr = (st, _from, _to) => {
        try {
            const blinsOnFromPeg = st.blins.filter(el => el.col === _from && el.row != null);
            const blinsOnToPeg = st.blins.filter(el => el.col === _to && el.row != null);
            const minsizeOnFromPeg = Math.min(...blinsOnFromPeg.map(el => el.size));//мин размере на FromPeg'e
           
            //??const minBlinIdxOnFromPeg = st.blins.findIndex(this.IdxMinBlin(_from, minsizeOnFromPeg));// индекс минимального блина в основном массив
            const minBlinIdxOnFromPeg = st.blins.findIndex((e, i, a) => (e.col === _from && e.size === minsizeOnFromPeg));

            var n = Object.assign(st.blins[minBlinIdxOnFromPeg], { col: _to }, { row: 7 - blinsOnToPeg.length })
            return st.blins;
        } catch (err) {
            console.log(err)
        }
    }
 
    moveBlin2 = (from, to, n) => {
        this.stout.push(setTimeout(() => {
            console.log('???', this.state.time, ' <===  T', from, ' -> ', to)

            this.setState((prevState, props) => {
                return (
                    { moves: prevState.moves + 1, blins: this.newArr(prevState, from, to) }
                )
            });
            this.checkWin()//?????
        }, n)
        )}


    moveDisk = function (fromPeg, toPeg) {
   
            setTimeout(() => {
                console.log('moveDisk: ', fromPeg + ' -> ' + toPeg);
             }, 2000);
       

        // function moveTower(height, fromPole, toPole, withPole) {
        //     //debugger;
        //     if (height >= 1) {
        //         moveTower(height - 1, fromPole, withPole, toPole);
        //         //t=t+1000;
        //         moveDisk(fromPole, toPole, t);

        //         moveTower(height - 1, withPole, toPole, fromPole);
        //     }
        // }
     
/*
const self= this;
        const { blins } = this.state;
        const blClone = this.state.blins.map(el => ({ ...el }));// clone blins
        const blinsOnFromPeg = blins.filter(el => el.col === fromPeg && el.row != null);
        const blinsOnToPeg = blins.filter(el => el.col === toPeg && el.row != null);

        const minsizeOnFromPeg = Math.min(...blinsOnFromPeg.map(el => el.size));//мин размере на FromPeg'e
        const minBlinIdxOnFromPeg = blins.findIndex(this.IdxMinBlin(fromPeg, minsizeOnFromPeg));// индекс минимального блина в основном массиве 
        //---------------
        //debugger;
        blClone[minBlinIdxOnFromPeg] = { ...blClone[minBlinIdxOnFromPeg], col: toPeg, row: 7 - blinsOnToPeg.length };

    //??  this.setState({blins:blClone} )  
*/
//return blClone;
    }


    solveHanoi = function (numDisks, fromPeg, toPeg) {
        if (numDisks < 1) {
           // debugger;
            return;
        }
        var sparePeg = (3 - (fromPeg - 1) - (toPeg - 1)) + 1;
        console.log('solveHanoi--', numDisks, ' --| ' + fromPeg + ' -- ' + toPeg +' -- ' +  sparePeg);
       this.solveHanoi(numDisks - 1, fromPeg, sparePeg);

           this.n = this.n+500
          this.moveBlin2(fromPeg,toPeg,this.n);

        console.log('solveHanoi--22 =', numDisks, ' --| ' + fromPeg + ' -- ' + toPeg +' -- ' +  sparePeg);
        this.solveHanoi(numDisks - 1, sparePeg, toPeg);

    };

    render() {
        const { blins,currBlinCount, rangedisabled, mode,time, moves, isStarted, isWin  } = this.state;
        const {classes} = this.props;
        return (
            <Layout onpanelclick={this.onPanelClick} rowcount={7}>
                {
                   this.state.blins.map((el, i) => {
                        return (
                            <Blin 
                                bcolor={el.color} 
                                bwidth={ 100 - (10 * (7 - i)) + '%'}
                                style={{
                                    gridColumn: el.col,
                                    gridRow: el.active ? 3 : el.row + 3
                                }} >
                                {i + 1}
                            </Blin>)
                    })
                }

                <div  className={classes.mancontainer}>
                    <BlinRange
                        isStarted={isStarted}
                        blinCount={currBlinCount}
                        disabled={rangedisabled}
                        onChangeCount={this.onChangeCount} />

                    <Modes
                        onChange={this.onChangeMode}
                        mode={mode}
                        isStarted={isStarted}
                        data={[{ label: "Авто", value: 'A' },
                               { label: "Вручную", value: 'H' }]} />

                    <Start
                        onStart={this.onStart}
                        onRestart={this.onRestart} />

                    <Info
                        time={time}
                        moves={moves}
                        isStarted={isStarted}
                        isWin={isWin}
                        mode={mode} />
                </div>
            </Layout>
        )
    }
}

export default injectSheet(manstyle)(HTower);
