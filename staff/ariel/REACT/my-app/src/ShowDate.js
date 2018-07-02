import React, {Component} from 'react'

class ShowDate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let date = new Date();
        let dateToShow;
        const props = this.props;
        this.props.onDateClicked();

        

        if (props.type === 'current') {
            dateToShow = date.toLocaleString();
        } else if (props.type === 'yesterday') {
            date.setDate(date.getDate() -1);
            dateToShow = date.toLocaleString();
        }

        return <span 
                onClick={()=>{
                    if(this.props.onDateClicked){
                        this.props.onDateClicked()
                    }
                }}
                style={{color:props.color}}>{dateToShow}</span>
    }
}

export default ShowDate;
