import React from 'react';
import ReactDom from 'react-dom';


class Square extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: null
        };
        this.click = this.click.bind(this);
    }
    click(){
        if(this.props.value === null){
            this.props.onClick();
        }else{
            alert('Cell is not available, or invalid. Please play again.');
        }
    }
    render() {
        let val = this.props.value;
      return (
        <button className="square" onClick = {() => this.click()} >
          {this.props.value}
        </button>
      );
    }
  }
  
  export default Square;
  