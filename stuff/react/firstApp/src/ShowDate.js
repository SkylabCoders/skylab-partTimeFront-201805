import React,{ Component } from 'react'
import FunctComp from './FunctComp';

class ShowDate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let date = new Date();
        let dateToShow;
        const props = this.props;
        console.log('ShowDate props: ', props);

        if(props.type === 'current'){
            dateToShow = date.toLocaleString();
        }else if(props.type === 'yesterday'){
            date.setDate(date.getDate() - 1);
            dateToShow = date.toLocaleString();
        }
        return <div>
            <span 
                onClick={()=>{
                    if(this.props.onDateClicked){
                        this.props.onDateClicked(this.props.type);
                    }
                }}
                style={{color:props.color}}>{dateToShow}</span>
        </div>
    }
    
}

export default ShowDate;