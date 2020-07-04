import React from 'react';



export default class SearchLink extends React.Component{
    constructor(prop){
        super(prop)
    }
    render(){
        return(
            <>
                <a className="btn" href={this.props.link}>#{this.props.label}</a>
            </>
        )
    }
}

