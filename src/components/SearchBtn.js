import React from 'react';
import './../css/style.css';

export default class SearchBtn extends React.Component{
    constructor(prop){
        super(prop)
    }
    render(){
        return(
            <>
                <a className="btn" href={this.props.link}>{this.props.label}</a>
            </>
        )
    }
}