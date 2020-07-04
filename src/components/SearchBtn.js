import React from 'react';
import './../css/style.css';

export default class SearchBtn extends React.Component{
    constructor(prop){
        super(prop)
    }
    render(){
        return(
            <>
                <a className="btn btn-white border-lighter rounded-pill mt-1 mb-1 mx-1 searchBtn" href={this.props.link}>{this.props.label}</a>
            </>
        )
    }
}