import React from 'react';



export default class SearchLink extends React.Component{
    constructor(prop){
        super(prop)
    }
    render(){
        return(
            <>
                <a className="btn btn-white border-lighter rounded-pill mt-1 mb-1 mx-1 searchLink" href={this.props.link}>#{this.props.label}</a>
            </>
        )
    }
}

